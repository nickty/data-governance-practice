import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, FileText, Search, Shield } from "lucide-react"
import GovernanceFramework from "@/components/governance-framework"
import StakeholderRegistry from "@/components/stakeholder-registry"

export default function GovernancePage() {
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
              <Link href="/governance" className="transition-colors hover:text-foreground/80 text-foreground">
                Governance
              </Link>
              <Link href="/lineage" className="transition-colors hover:text-foreground/80">
                Lineage
              </Link>
              <Link href="/policies" className="transition-colors hover:text-foreground/80">
                Policies
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Data Governance (Axon)</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search governance..." className="w-[200px] sm:w-[300px] pl-8" />
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Export Framework
            </Button>
          </div>
        </div>

        <Tabs defaultValue="framework" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="framework">Governance Framework</TabsTrigger>
            <TabsTrigger value="stakeholders">Stakeholder Registry</TabsTrigger>
            <TabsTrigger value="facets">Axon Facets</TabsTrigger>
          </TabsList>
          <TabsContent value="framework">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Governance Framework</CardTitle>
                  <CardDescription>Define and manage your data governance framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <GovernanceFramework />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="stakeholders">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Stakeholder Registry</CardTitle>
                  <CardDescription>Manage data stewards, owners, and other stakeholders</CardDescription>
                </CardHeader>
                <CardContent>
                  <StakeholderRegistry />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="facets">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Axon Facets</CardTitle>
                  <CardDescription>Configure and manage Axon facets and their relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Facet Configuration</h3>
                      <Button variant="outline" size="sm">
                        <Shield className="mr-2 h-4 w-4" />
                        Add Facet
                      </Button>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-muted-foreground text-sm mb-4">
                        Configure Axon facets to organize your governance assets. Define relationships between systems,
                        glossaries, datasets, and people to create a comprehensive governance framework.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">System Facets</h4>
                          <p className="text-sm text-muted-foreground">
                            Define systems and applications in your enterprise architecture
                          </p>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Glossary Facets</h4>
                          <p className="text-sm text-muted-foreground">
                            Organize business terms and their relationships
                          </p>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Dataset Facets</h4>
                          <p className="text-sm text-muted-foreground">Catalog datasets and their attributes</p>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">People Facets</h4>
                          <p className="text-sm text-muted-foreground">
                            Define roles, responsibilities, and organizational structure
                          </p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

