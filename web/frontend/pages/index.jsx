import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText
} from "@shopify/polaris";

import { QRCodeIndex } from "../components";

export default function HomePage() {
  /**
   * Added useNavigate hook to set up the navigate function.
   * This function modifies the top-level browser URL.
   */
  const navigate = useNavigate();

  const isLoading = false;
  const isRefetching = false;
  const QRCodes = [
    {
      createdAt: "2022-06-13",
      destination: "checkout",
      title: "My first QR code",
      id: 1,
      discountCode: "SUMMERDISCOUNT",
      product: {
        title: "Faded t-shirt",
      }
    },
    {
      createdAt: "2022-06-13",
      destination: "product",
      title: "My second QR code",
      id: 2,
      discountCode: "WINTERDISCOUNT",
      product: {
        title: "Cozy parka",
      }
    },
    {
      createdAt: "2022-06-13",
      destination: "product",
      title: "QR code for deleted product",
      id: 3,
      product: {
        title: "Deleted product",
      }
    },
  ];
  

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
