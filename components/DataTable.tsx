"use client";

import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    ColumnDef,
    SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";


interface DataRow {
    srnumber: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string; // was Date
    updatedAt: string; // was Date
}

interface DataTableProps {
    data: DataRow[];
}

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-GB', options);
};
export const DataTable = () => {
    const session = useSession();
    const [data, setdata] = useState<DataRow[]>([])
    const [sorting, setSorting] = useState<SortingState>([]);
    const [tableData, setTableData] = useState<{ data: DataRow[]; count: number }>({
        data: [],
        count: 0,
    });
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/api/get-contact-response", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await res.json();
            const processedData = result.data.map((item: Omit<DataRow, 'srnumber'>, index: number) => ({
                srnumber: index + 1,
                ...item,
            }));
            setTableData({
                data: processedData,
                count: result.data.length,
            });
        };
        fetchData();
    }, [])
    console.log("Table Data", tableData);

    const columns: ColumnDef<DataRow>[] = [
        {
            accessorKey: "srnumber",
            header: "Sr. No",
        },
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "subject",
            header: "Subject",
        },
        {
            accessorKey: "message",
            header: "Message",
        },
        {
            accessorKey: "createdAt",
            header: "Created",
            cell: ({ getValue }) => formatDate(getValue() as string),
        },
        {
            accessorKey: "updatedAt",
            header: "Updated",
            cell: ({ getValue }) => formatDate(getValue() as string),
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                const rowData = row.original;
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() =>
                                    navigator.clipboard.writeText(rowData.email)
                                }
                            >
                                Copy Email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Detail</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];
   
    const table = useReactTable({
        data: tableData.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting },
        onSortingChange: setSorting,
    });

    return (
        <div className="rounded-md border border-border overflow-x-auto">
            {/* {console.log(data)} */}
            <table className="w-full text-sm">
                <thead className="bg-muted">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    className="cursor-pointer px-4 py-2 text-left"
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {{
                                        asc: " ↑",
                                        desc: " ↓",
                                    }[header.column.getIsSorted() as string] ?? null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="hover:bg-muted/40">
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 py-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
