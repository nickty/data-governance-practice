"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash, UserPlus } from "lucide-react"

export default function StakeholderRegistry() {
  const stakeholders = [
    {
      id: 1,
      name: "John Smith",
      role: "Data Owner",
      domain: "Production Data",
      department: "Operations",
      email: "john.smith@example.com",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Data Steward",
      domain: "Well Data",
      department: "Production Engineering",
      email: "sarah.johnson@example.com",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Data Custodian",
      domain: "All Systems",
      department: "IT",
      email: "michael.chen@example.com",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Data Steward",
      domain: "Reservoir Data",
      department: "Reservoir Engineering",
      email: "emily.rodriguez@example.com",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Data Owner",
      domain: "Compliance Data",
      department: "Compliance",
      email: "david.wilson@example.com",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Stakeholder
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Domain</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stakeholders.map((stakeholder) => (
            <TableRow key={stakeholder.id}>
              <TableCell className="font-medium">{stakeholder.name}</TableCell>
              <TableCell>
                <Badge variant="outline">{stakeholder.role}</Badge>
              </TableCell>
              <TableCell>{stakeholder.domain}</TableCell>
              <TableCell>{stakeholder.department}</TableCell>
              <TableCell>{stakeholder.email}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

