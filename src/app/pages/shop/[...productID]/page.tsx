import React from 'react';

async function getProduct(productID) {
  const res = await fetch(`https://u4m48ujb.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20_id%20%3D%3D%20'${productID}'%5D%7B%0A%20%20%22images%22%3A%20images%5B%5D.asset._ref%2C%0A%20%20%20%20title%2C%20subTitle%2C%20price%2C%20_id%0A%20%20%0A%7D%0A%0A`,
    {next: {revalidate: 600}});
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Page({params}: { params: any }) {

  const productID = params.productID
  const data = await getProduct(productID);
  return (
    <div>
      {productID}
      {JSON.stringify(data)}
    </div>
  );
}

export default Page;
