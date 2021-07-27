import React, { useMemo } from "react";
import MOCK_DATA from "../MOCK_DATA.json";
import { useTable } from "react-table";
import COLUMNS from "./columns";

const BasicTable = () => {
    // const columns = useMemo(() => COLUMNS, []);
    // const data = useMemo(() => MOCK_DATA, []);
    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    //     useTable({ columns, data });
    // return (
    //     <table {...getTableProps}>
    //         <thead>
    //             {headerGroups.map(headerGroup => (
    //                 <tr {...headerGroup.getHeaderGroupProps()}>
    //                     {headerGroup.headers.map(column => (
    //                         <th {...column.getHeaderProps()}>
    //                             {column.render("Header")}
    //                         </th>
    //                     ))}
    //                 </tr>
    //             ))}
    //         </thead>
    //         <tbody {...getTableBodyProps}>
    //             {rows.map((row, i) => {
    //                 prepareRow(row);
    //                 return (
    //                     <tr {...row.getRowProps}>
    //                         {rows.cells.map(cell => {
    //                             return (
    //                                 <td {...cell.getCellProps()}>
    //                                     {cell.render("cell")}
    //                                 </td>
    //                             );
    //                         })}
    //                     </tr>
    //                 );
    //             })}
    //         </tbody>
    //     </table>
    // );
    return(
     <>
         <img src="../components/" alt=""/>
     </>
    );
};

export default BasicTable;
