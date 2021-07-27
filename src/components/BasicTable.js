import React, { useMemo } from "react";
import MOCK_DATA from "../MOCK_DATA.json";
import { useTable } from "react-table";
import COLUMNS from "./columns";

const Table = ({ data, columns }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });
    return (
        <table
            {...getTableProps()}
            className={"table table-dark table-striped"}
        >
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()} scope="col">
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()} scope="row">
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    return (
        <div className={"container"}>
            <Table data={data} columns={columns} />
        </div>
    );
};

export default BasicTable;
