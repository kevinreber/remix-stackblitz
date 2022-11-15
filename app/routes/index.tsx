import React from 'react';
import { json, LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { MOCK_DATA } from '../__mocks__/MOCK_DATA';

export async function loader({ request }: LoaderArgs) {
  const getData = MOCK_DATA;

  return json(getData);
}

export const getDataAsIndentedJSON = (data: any) => {
  return JSON.stringify(data, null, '  ');
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <h3>Rendering Data below...</h3>
      {data && <pre>{getDataAsIndentedJSON(data)}</pre>}
    </div>
  );
}
