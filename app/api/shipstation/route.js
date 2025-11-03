export async function GET() {
  const xmlResponse = `<?xml version="1.0" encoding="utf-8"?>
<Orders>
  <Order>
    <OrderID>1</OrderID>
    <OrderNumber>TEST-001</OrderNumber>
    <OrderDate>2025-11-02T00:00:00</OrderDate>
    <OrderStatus>awaiting_shipment</OrderStatus>
    <LastModifiedDate>2025-11-02T00:00:00</LastModifiedDate>
    <ShippingMethod>Standard</ShippingMethod>
    <OrderTotal>0.00</OrderTotal>
    <CustomerNotes>Test connection OK</CustomerNotes>
    <InternalNotes>Dummy data for ShipStation validation</InternalNotes>
    <BillTo>
      <Name>Test User</Name>
    </BillTo>
    <ShipTo>
      <Name>Test User</Name>
      <Street1>123 Main St</Street1>
      <City>Austin</City>
      <State>TX</State>
      <PostalCode>78701</PostalCode>
      <Country>US</Country>
    </ShipTo>
    <Items>
      <Item>
        <SKU>TESTSKU</SKU>
        <Name>Validation Item</Name>
        <Quantity>1</Quantity>
        <UnitPrice>0.00</UnitPrice>
      </Item>
    </Items>
  </Order>
</Orders>`;

  return new Response(xmlResponse, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}