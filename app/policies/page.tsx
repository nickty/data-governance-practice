import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Search, Shield } from "lucide-react"
import PolicyRegistry from "@/components/policy-registry"
import ComplianceDashboard from "@/components/compliance-dashboard"

export default function PoliciesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Database className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">DataGov Pro</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/catalog" className="transition-colors hover:text-foreground/80">
                Data Catalog
              </Link>
              <Link href="/profiling" className="transition-colors hover:text-foreground/80">
                Data Profiling
              </Link>
              <Link href="/governance" className="transition-colors hover:text-foreground/80">
                Governance
              </Link>
              <Link href="/lineage" className="transition-colors hover:text-foreground/80">
                Lineage
              </Link>
              <Link href="/policies" className="transition-colors hover:text-foreground/80 text-foreground">
                Policies
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Data Policies</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search policies..." className="w-[200px] sm:w-[300px] pl-8" />
            </div>
            <Button>
              <Shield className="mr-2 h-4 w-4" />
              Create Policy
            </Button>
          </div>
        </div>

        <Tabs defaultValue="registry" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="registry">Policy Registry</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="registry">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Policy Registry</CardTitle>
                  <CardDescription>Manage data governance policies and standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <PolicyRegistry />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="compliance">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Compliance Dashboard</CardTitle>
                  <CardDescription>Monitor compliance with data governance policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ComplianceDashboard />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

