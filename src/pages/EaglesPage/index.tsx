import { useEffect, useState } from "react";
import HonorRoll from "./honorRoll.csv";
import { usePapaParse } from "react-papaparse";
import { useT86Title } from "../../hooks/useT86Title";
import { Page } from "../../components/Page";
import Table from "react-bootstrap/Table";

interface EagleData {
  Number: string;
  Date: string;
  Name: string;
}

export const EaglesPage = () => {
  const [csv, setCSV] = useState<EagleData[]>();
  const { readString } = usePapaParse();

  useT86Title("Eagles");

  useEffect(() => {
    async function getData() {
      const data = await (await fetch(HonorRoll)).text();
      readString<EagleData>(data, {
        header: true,
        worker: true,
        complete: (result) => setCSV(result.data),
      });
    }
    getData();
  });

  return (
    <>
      {csv && (
        <Page>
          <EagleTable eagles={csv} />
        </Page>
      )}
    </>
  );
};

export const EagleTable = ({ eagles }: { eagles: EagleData[] }) => (
  <Table>
    <thead>
      <tr>
        <th>Number</th>
        <th>Date</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {eagles
        .filter((e) => e.Number !== "")
        .map((eagle, i) => (
          <tr key={i}>
            <td>{eagle.Number}</td>
            <td>{eagle.Date}</td>
            <td>{eagle.Name}</td>
          </tr>
        ))}
    </tbody>
  </Table>
);
