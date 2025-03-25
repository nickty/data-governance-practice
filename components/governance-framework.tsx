"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Users, Settings } from "lucide-react"

export default function GovernanceFramework() {
  return (
    <Tabs defaultValue="structure">
      <TabsList className="mb-4">
        <TabsTrigger value="structure">Governance Structure</TabsTrigger>
        <TabsTrigger value="roles">Roles & Responsibilities</TabsTrigger>
        <TabsTrigger value="processes">Governance Processes</TabsTrigger>
      </TabsList>

      <TabsContent value="structure">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Organizational Structure</h3>
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Edit Structure
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Executive Steering Committee</CardTitle>
                <CardDescription>Strategic oversight</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>CIO</li>
                  <li>CDO</li>
                  <li>Business Unit Leaders</li>
                  <li>Compliance Officer</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Data Governance Council</CardTitle>
                <CardDescription>Tactical implementation</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Data Governance Lead</li>
                  <li>Business Data Stewards</li>
                  <li>Technical Data Stewards</li>
                  <li>IT Representatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Working Groups</CardTitle>
                <CardDescription>Operational execution</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Data Quality Team</li>
                  <li>Metadata Management Team</li>
                  <li>Data Security Team</li>
                  <li>Data Architecture Team</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="roles">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Roles & Responsibilities</h3>
            <Button variant="outline" size="sm">
              <Users className="mr-2 h-4 w-4" />
              Edit Roles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Data Owner</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">
                  Accountable for the quality and security of specific data domains.
                </p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Define data requirements</li>
                  <li>Approve data access</li>
                  <li>Ensure compliance with policies</li>
                  <li>Resolve data issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Data Steward</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">Responsible for day-to-day management of data assets.</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Maintain data definitions</li>
                  <li>Monitor data quality</li>
                  <li>Implement data standards</li>
                  <li>Coordinate with IT teams</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Data Custodian</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">
                  Manages the technical environment for data storage and access.
                </p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Implement security controls</li>
                  <li>Manage database systems</li>
                  <li>Perform backups and recovery</li>
                  <li>Implement access controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Data Consumer</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">Uses data for business operations and decision-making.</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Follow data usage policies</li>
                  <li>Report data quality issues</li>
                  <li>Provide feedback on data needs</li>
                  <li>Use data responsibly</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="processes">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Governance Processes</h3>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Edit Processes
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Data Quality Management</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">Processes to ensure data meets quality standards.</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Data profiling and assessment</li>
                  <li>Quality rule definition</li>
                  <li>Issue remediation</li>
                  <li>Quality monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Metadata Management</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">Processes to manage data about data.</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Business glossary maintenance</li>
                  <li>Data dictionary updates</li>
                  <li>Lineage documentation</li>
                  <li>Metadata standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Data Access Management</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">Processes to control data access.</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Access request workflow</li>
                  <li>Approval processes</li>
                  <li>Access review</li>
                  <li>Role-based access control</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Policy Management</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-muted-foreground mb-2">Processes to develop and maintain data policies.</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  <li>Policy development</li>
                  <li>Policy approval</li>
                  <li>Policy communication</li>
                  <li>Compliance monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

