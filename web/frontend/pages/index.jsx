import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText
} from "@shopify/polaris";

import { useAppQuery } from "../hooks";

import { QRCodeIndex } from "../components";

export default function HomePage() {
  /**
   * Added useNavigate hook to set up the navigate function.
   * This function modifies the top-level browser URL.
   */
  const navigate = useNavigate();

  /* useAppQuery wraps react-query and the App Bridge authenticatedFetch function */
  const {
    data: QRCodes,
    isLoading,
    /*
      react-query provides stale-while-revalidate caching.
      By passing isRefetching to Index Tables we can show stale data and a loading state.
      Once the query refetches, IndexTable updates and the loading state is removed.
      This ensures a performant UX.
    */
    isRefetching,
  } = useAppQuery({
    url: "/api/qrcodes",
  });

  const qrCodesMarkup = QRCodes?.length ? (
    <QRCodeIndex QRCodes={QRCodes} loading={isRefetching} />
  ) : null;

  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;

  const emptyStateMarkup = 
    !isLoading && !QRCodes?.length ? (
      <Card sectioned>
        <EmptyState 
          heading="Create awesome QR Codes for your products."
          action={{
            content: "Create QR code",
            onAction: () => navigate("/qrcodes/new")
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        />
      </Card>
    ) : null;
  
  /**
   * Use Polaris Page and TitleBar components to create the page layout,
   * and include the empty state contents set above.
   */
  return (
    <Page fullWidth={!!qrCodesMarkup}>
      <TitleBar 
        title="QR codes"
        primaryAction={{
          content: "Create QR code",
          onAction: () => navigate("/qrcodes/new")
        }}
      />
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {qrCodesMarkup}
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  )
}
