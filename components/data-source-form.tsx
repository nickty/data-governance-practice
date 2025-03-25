"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

interface DataSourceFormProps {
  initialData?: any
  isEditing?: boolean
}

export default function DataSourceForm({ initialData, isEditing = false }: DataSourceFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    type: initialData?.type || "",
    owner: initialData?.owner || "",
    connectionString: initialData?.connectionString || "",
    description: initialData?.description || "",
    securityLevel: initialData?.securityLevel || "Medium",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const url = isEditing ? `/api/data-sources?id=${initialData.id}` : "/api/data-sources"

      const method = isEditing ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to save data source")
      }

      router.push("/catalog")
      router.refresh()
    } catch (error) {
      console.error("Error saving data source:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select database type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Oracle">Oracle</SelectItem>
                <SelectItem value="SQL Server">SQL Server</SelectItem>
                <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
                <SelectItem value="MySQL">MySQL</SelectItem>
                <SelectItem value="Snowflake">Snowflake</SelectItem>
                <SelectItem value="Hadoop">Hadoop</SelectItem>
                <SelectItem value="MongoDB">MongoDB</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="owner">Owner</Label>
            <Input id="owner" name="owner" value={formData.owner} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="securityLevel">Security Level</Label>
            <Select
              value={formData.securityLevel}
              onValueChange={(value) => handleSelectChange("securityLevel", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select security level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="connectionString">Connection String</Label>
          <Input
            id="connectionString"
            name="connectionString"
            value={formData.connectionString}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={3} />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => router.back()} disabled={isLoading}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isEditing ? "Update" : "Create"} Data Source
        </Button>
      </div>
    </form>
  )
}

