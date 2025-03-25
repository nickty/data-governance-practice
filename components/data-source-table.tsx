"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash, Eye } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DataSourceTable() {
  const router = useRouter()
  const [dataSources, setDataSources] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDataSources = async () => {
      try {
        const response = await fetch("/api/data-sources")
        if (!response.ok) {
          throw new Error("Failed to fetch data sources")
        }
        const data = await response.json()
        setDataSources(data)
      } catch (error) {
        console.error("Error fetching data sources:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataSources()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this data source?")) {
      return
    }

    try {
      const response = await fetch(`/api/data-sources?id=${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete data source")
      }

      // Remove the deleted item from the state
      setDataSources(dataSources.filter((source) => source.id !== id))
      router.refresh()
    } catch (error) {
      console.error("Error deleting data source:", error)
    }
  }

  if (isLoading) {
    return <div className="flex justify-center p-4">Loading data sources...</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Scan</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSources.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center py-4">
              No data sources found. Add your first data source to get started.
            </TableCell>
          </TableRow>
        ) : (
          dataSources.map((source) => (
            <TableRow key={source.id}>
              <TableCell className="font-medium">{source.name}</TableCell>
              <TableCell>{source.type}</TableCell>
              <TableCell>
                <Badge variant={source.status === "Connected" ? "default" : "destructive"}>{source.status}</Badge>
              </TableCell>
              <TableCell>{source.lastScan}</TableCell>
              <TableCell>{source.owner}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/catalog/view/${source.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/catalog/edit/${source.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(source.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

