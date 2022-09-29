import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText
} from "@shopify/polaris";

export default function HomePage() {
  /**
   * Added useNavigate hook to set up the navigate function.
   * This function modifies the top-level browser URL.
   */
  const navigate = useNavigate();

  const isLoading = false;
  const isRefetching = false;
  const QRCodes = [];

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
    <Page>
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
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  )
}
