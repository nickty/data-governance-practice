/**
 * Client-side database simulation using localStorage
 * In a real application, this would be replaced with a proper database
 */

// Database collections
const COLLECTIONS = {
    DATA_SOURCES: "data-sources",
    DATASETS: "datasets",
    QUALITY_RULES: "quality-rules",
    POLICIES: "policies",
    STAKEHOLDERS: "stakeholders",
    GOVERNANCE_FRAMEWORK: "governance-framework",
    LINEAGE_MAPPINGS: "lineage-mappings",
  }
  
  // Initialize the database with default data if empty
  export function initializeDatabase() {
    // Check if the database is already initialized
    if (typeof window === "undefined") return
  
    const isInitialized = localStorage.getItem("db-initialized")
    if (isInitialized) return
  
    // Insert seed data
    insertData(COLLECTIONS.DATA_SOURCES, mockDataSources)
    insertData(COLLECTIONS.DATASETS, mockDatasets)
    insertData(COLLECTIONS.QUALITY_RULES, mockQualityRules)
    insertData(COLLECTIONS.POLICIES, mockPolicies)
    insertData(COLLECTIONS.STAKEHOLDERS, mockStakeholders)
    insertData(COLLECTIONS.GOVERNANCE_FRAMEWORK, mockGovernanceFramework)
    insertData(COLLECTIONS.LINEAGE_MAPPINGS, mockLineageMappings)
  
    localStorage.setItem("db-initialized", "true")
  }
  
  // CRUD operations
  
  export function getAllItems(collection: string) {
    if (typeof window === "undefined") return []
    const data = localStorage.getItem(collection)
    return data ? JSON.parse(data) : []
  }
  
  export function getItemById(collection: string, id: number | string) {
    const items = getAllItems(collection)
    return items.find((item: any) => item.id.toString() === id.toString())
  }
  
  export function insertData(collection: string, data: any[]) {
    if (typeof window === "undefined") return
    localStorage.setItem(collection, JSON.stringify(data))
  }
  
  export function createItem(collection: string, item: any) {
    if (typeof window === "undefined") return null
  
    const items = getAllItems(collection)
    // Generate a new ID
    const newId = items.length > 0 ? Math.max(...items.map((i: any) => Number.parseInt(i.id))) + 1 : 1
  
    const newItem = { ...item, id: newId }
    items.push(newItem)
  
    insertData(collection, items)
    return newItem
  }
  
  export function updateItem(collection: string, id: number | string, updatedItem: any) {
    if (typeof window === "undefined") return null
  
    const items = getAllItems(collection)
    const index = items.findIndex((item: any) => item.id.toString() === id.toString())
  
    if (index === -1) return null
  
    items[index] = { ...items[index], ...updatedItem }
    insertData(collection, items)
  
    return items[index]
  }
  
  export function deleteItem(collection: string, id: number | string) {
    if (typeof window === "undefined") return false
  
    const items = getAllItems(collection)
    const filteredItems = items.filter((item: any) => item.id.toString() !== id.toString())
  
    if (filteredItems.length === items.length) return false
  
    insertData(collection, filteredItems)
    return true
  }
  
  export function queryItems(collection: string, query: Record<string, any>) {
    const items = getAllItems(collection)
    return items.filter((item: any) => {
      return Object.entries(query).every(([key, value]) => {
        if (typeof value === "string") {
          return item[key]?.toLowerCase().includes(value.toLowerCase())
        }
        return item[key] === value
      })
    })
  }
  
  // Mock data
  const mockDataSources = [
    {
      id: 1,
      name: "Production Database",
      type: "Oracle",
      status: "Connected",
      lastScan: "2023-10-15",
      owner: "Production Team",
      connectionString: "jdbc:oracle:thin:@prodserver:1521:ORCL",
      description: "Primary database for production data from oil wells",
      securityLevel: "High",
      avgDailyVolume: "2.5 GB",
    },
    {
      id: 2,
      name: "Well Data Warehouse",
      type: "Snowflake",
      status: "Connected",
      lastScan: "2023-10-14",
      owner: "Data Engineering",
      connectionString: "snowflake://account.snowflakecomputing.com",
      description: "Central repository for all well-related data analytics",
      securityLevel: "High",
      avgDailyVolume: "5.8 GB",
    },
    {
      id: 3,
      name: "Reservoir Management System",
      type: "SQL Server",
      status: "Connected",
      lastScan: "2023-10-13",
      owner: "Reservoir Team",
      connectionString: "jdbc:sqlserver://reservoirserver:1433",
      description: "System for tracking and analyzing reservoir metrics",
      securityLevel: "Medium",
      avgDailyVolume: "1.7 GB",
    },
    {
      id: 4,
      name: "Drilling Operations DB",
      type: "PostgreSQL",
      status: "Disconnected",
      lastScan: "2023-10-10",
      owner: "Drilling Team",
      connectionString: "jdbc:postgresql://drillserver:5432/drilling",
      description: "Database for all drilling operations and logs",
      securityLevel: "Medium",
      avgDailyVolume: "3.2 GB",
    },
    {
      id: 5,
      name: "Compliance Data Lake",
      type: "Hadoop",
      status: "Connected",
      lastScan: "2023-10-12",
      owner: "Compliance Team",
      connectionString: "hdfs://complianceserver:9000",
      description: "Storage for regulatory and compliance data",
      securityLevel: "High",
      avgDailyVolume: "4.1 GB",
    },
  ]
  
  const mockDatasets = [
    {
      id: 1,
      name: "Well Production Data",
      source: "Production Database",
      sourceId: 1,
      tables: 12,
      columns: 156,
      domain: "Production",
      quality: "High",
      description: "Daily production metrics from active wells",
      dataOwner: "John Smith",
      sensitivity: "Confidential",
      retentionPeriod: "7 years",
      updateFrequency: "Daily",
    },
    {
      id: 2,
      name: "Reservoir Characteristics",
      source: "Reservoir Management System",
      sourceId: 3,
      tables: 8,
      columns: 94,
      domain: "Reservoir",
      quality: "Medium",
      description: "Geological and petrophysical data for reservoirs",
      dataOwner: "Emily Rodriguez",
      sensitivity: "Restricted",
      retentionPeriod: "10 years",
      updateFrequency: "Monthly",
    },
    {
      id: 3,
      name: "Drilling Operations",
      source: "Drilling Operations DB",
      sourceId: 4,
      tables: 15,
      columns: 203,
      domain: "Drilling",
      quality: "High",
      description: "Drilling logs and operational data",
      dataOwner: "Robert Chen",
      sensitivity: "Confidential",
      retentionPeriod: "5 years",
      updateFrequency: "Real-time",
    },
    {
      id: 4,
      name: "Compliance Reports",
      source: "Compliance Data Lake",
      sourceId: 5,
      tables: 6,
      columns: 78,
      domain: "Compliance",
      quality: "Medium",
      description: "Regulatory compliance reports and documentation",
      dataOwner: "David Wilson",
      sensitivity: "Restricted",
      retentionPeriod: "15 years",
      updateFrequency: "Quarterly",
    },
    {
      id: 5,
      name: "Production Forecasts",
      source: "Well Data Warehouse",
      sourceId: 2,
      tables: 5,
      columns: 67,
      domain: "Production",
      quality: "High",
      description: "Future production estimates and forecasts",
      dataOwner: "Sarah Johnson",
      sensitivity: "Highly Restricted",
      retentionPeriod: "3 years",
      updateFrequency: "Monthly",
    },
  ]
  
  const mockQualityRules = [
    {
      id: 1,
      name: "Well ID Format Check",
      dataset: "Well Production Data",
      datasetId: 1,
      type: "Format Validation",
      status: "Active",
      lastRun: "2023-10-15",
      description: "Validates that well IDs follow the format ABC-12345",
      expression: "REGEXP_LIKE(well_id, '^[A-Z]{3}-\\d{5}$')",
      severity: "High",
      createdBy: "Sarah Johnson",
    },
    {
      id: 2,
      name: "Production Volume Range Check",
      dataset: "Well Production Data",
      datasetId: 1,
      type: "Range Validation",
      status: "Active",
      lastRun: "2023-10-15",
      description: "Ensures production volume values are within expected range",
      expression: "production_volume BETWEEN 10 AND 5000",
      severity: "High",
      createdBy: "John Smith",
    },
    {
      id: 3,
      name: "Reservoir Pressure Consistency",
      dataset: "Reservoir Characteristics",
      datasetId: 2,
      type: "Consistency Check",
      status: "Active",
      lastRun: "2023-10-14",
      description: "Checks that reservoir pressure readings are consistent across time",
      expression: "ABS(pressure - LAG(pressure)) < 50",
      severity: "Medium",
      createdBy: "Emily Rodriguez",
    },
    {
      id: 4,
      name: "Drilling Depth Validation",
      dataset: "Drilling Operations",
      datasetId: 3,
      type: "Range Validation",
      status: "Inactive",
      lastRun: "2023-10-10",
      description: "Validates that drilling depth values are within geological limits",
      expression: "depth > 0 AND depth < 30000",
      severity: "High",
      createdBy: "Robert Chen",
    },
    {
      id: 5,
      name: "Compliance Report Completeness",
      dataset: "Compliance Reports",
      datasetId: 4,
      type: "Completeness Check",
      status: "Active",
      lastRun: "2023-10-12",
      description: "Ensures all required fields in compliance reports are filled",
      expression: "report_date IS NOT NULL AND submitted_by IS NOT NULL AND approval_status IS NOT NULL",
      severity: "Critical",
      createdBy: "David Wilson",
    },
  ]
  
  const mockPolicies = [
    {
      id: 1,
      name: "Data Classification Policy",
      domain: "All Data",
      status: "Active",
      owner: "Information Security",
      lastUpdated: "2023-09-15",
      description: "Guidelines for classifying data sensitivity and handling requirements",
      approvedBy: "Executive Committee",
      version: "2.1",
      reviewCycle: "Annual",
      complianceRequirements: ["ISO 27001", "GDPR"],
    },
    {
      id: 2,
      name: "Production Data Quality Standards",
      domain: "Production",
      status: "Active",
      owner: "Production Team",
      lastUpdated: "2023-08-22",
      description: "Standards for ensuring quality of production data",
      approvedBy: "Data Governance Council",
      version: "1.5",
      reviewCycle: "Semi-Annual",
      complianceRequirements: ["API Standards", "Internal Standards"],
    },
    {
      id: 3,
      name: "Reservoir Data Retention Policy",
      domain: "Reservoir",
      status: "Draft",
      owner: "Reservoir Team",
      lastUpdated: "2023-10-05",
      description: "Guidelines for retention periods of reservoir data",
      approvedBy: "Pending",
      version: "0.9",
      reviewCycle: "Annual",
      complianceRequirements: ["ISO 27001", "Industry Regulations"],
    },
    {
      id: 4,
      name: "Regulatory Reporting Standards",
      domain: "Compliance",
      status: "Active",
      owner: "Compliance Team",
      lastUpdated: "2023-07-30",
      description: "Standards for regulatory reporting and compliance data",
      approvedBy: "Legal Department",
      version: "3.0",
      reviewCycle: "Quarterly",
      complianceRequirements: ["SEC", "EPA", "DOE"],
    },
    {
      id: 5,
      name: "Data Access Control Policy",
      domain: "All Data",
      status: "Active",
      owner: "Information Security",
      lastUpdated: "2023-09-10",
      description: "Policy governing data access controls and authorization",
      approvedBy: "CISO",
      version: "2.3",
      reviewCycle: "Annual",
      complianceRequirements: ["ISO 27001", "SOX"],
    },
  ]
  
  const mockStakeholders = [
    {
      id: 1,
      name: "John Smith",
      role: "Data Owner",
      domain: "Production Data",
      department: "Operations",
      email: "john.smith@example.com",
      phone: "+1-555-123-4567",
      responsibilities: ["Approve data access", "Define data requirements", "Resolve quality issues"],
      delegateTo: "Sarah Johnson",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Data Steward",
      domain: "Well Data",
      department: "Production Engineering",
      email: "sarah.johnson@example.com",
      phone: "+1-555-234-5678",
      responsibilities: ["Maintain data definitions", "Monitor data quality", "Implement standards"],
      delegateTo: "",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Data Custodian",
      domain: "All Systems",
      department: "IT",
      email: "michael.chen@example.com",
      phone: "+1-555-345-6789",
      responsibilities: ["Implement security controls", "Manage database systems", "Perform backups"],
      delegateTo: "",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Data Steward",
      domain: "Reservoir Data",
      department: "Reservoir Engineering",
      email: "emily.rodriguez@example.com",
      phone: "+1-555-456-7890",
      responsibilities: ["Define reservoir data metrics", "Maintain data quality", "Coordinate with IT"],
      delegateTo: "",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Data Owner",
      domain: "Compliance Data",
      department: "Compliance",
      email: "david.wilson@example.com",
      phone: "+1-555-567-8901",
      responsibilities: ["Ensure regulatory compliance", "Approve data use", "Define retention requirements"],
      delegateTo: "",
    },
  ]
  
  const mockGovernanceFramework = {
    structure: {
      committees: [
        {
          id: 1,
          name: "Executive Steering Committee",
          description: "Strategic oversight for data governance",
          members: ["CIO", "CDO", "Business Unit Leaders", "Compliance Officer"],
          meetingFrequency: "Monthly",
        },
        {
          id: 2,
          name: "Data Governance Council",
          description: "Tactical implementation of governance strategies",
          members: ["Data Governance Lead", "Business Data Stewards", "Technical Data Stewards", "IT Representatives"],
          meetingFrequency: "Bi-weekly",
        },
        {
          id: 3,
          name: "Working Groups",
          description: "Operational execution of governance initiatives",
          members: ["Data Quality Team", "Metadata Management Team", "Data Security Team", "Data Architecture Team"],
          meetingFrequency: "Weekly",
        },
      ],
    },
    roles: [
      {
        id: 1,
        title: "Data Owner",
        description: "Accountable for the quality and security of specific data domains",
        responsibilities: [
          "Define data requirements",
          "Approve data access",
          "Ensure compliance with policies",
          "Resolve data issues",
        ],
        requiredSkills: ["Domain expertise", "Leadership", "Risk management"],
      },
      {
        id: 2,
        title: "Data Steward",
        description: "Responsible for day-to-day management of data assets",
        responsibilities: [
          "Maintain data definitions",
          "Monitor data quality",
          "Implement data standards",
          "Coordinate with IT teams",
        ],
        requiredSkills: ["Data management", "Domain knowledge", "Communication", "Problem-solving"],
      },
      {
        id: 3,
        title: "Data Custodian",
        description: "Manages the technical environment for data storage and access",
        responsibilities: [
          "Implement security controls",
          "Manage database systems",
          "Perform backups and recovery",
          "Implement access controls",
        ],
        requiredSkills: ["Database administration", "Security management", "System architecture"],
      },
      {
        id: 4,
        title: "Data Consumer",
        description: "Uses data for business operations and decision-making",
        responsibilities: [
          "Follow data usage policies",
          "Report data quality issues",
          "Provide feedback on data needs",
          "Use data responsibly",
        ],
        requiredSkills: ["Data literacy", "Domain knowledge", "Analytical skills"],
      },
    ],
    processes: [
      {
        id: 1,
        name: "Data Quality Management",
        description: "Processes to ensure data meets quality standards",
        steps: ["Data profiling and assessment", "Quality rule definition", "Issue remediation", "Quality monitoring"],
        owner: "Data Quality Team",
        kpis: ["Data quality score", "Number of quality issues", "Issue resolution time"],
      },
      {
        id: 2,
        name: "Metadata Management",
        description: "Processes to manage data about data",
        steps: [
          "Business glossary maintenance",
          "Data dictionary updates",
          "Lineage documentation",
          "Metadata standards",
        ],
        owner: "Metadata Management Team",
        kpis: ["Glossary term coverage", "Data element documentation completeness", "Lineage mapping coverage"],
      },
      {
        id: 3,
        name: "Data Access Management",
        description: "Processes to control data access",
        steps: ["Access request workflow", "Approval processes", "Access review", "Role-based access control"],
        owner: "Data Security Team",
        kpis: ["Access request processing time", "Compliance with access policies", "Access review completion rate"],
      },
      {
        id: 4,
        name: "Policy Management",
        description: "Processes to develop and maintain data policies",
        steps: ["Policy development", "Policy approval", "Policy communication", "Compliance monitoring"],
        owner: "Data Governance Council",
        kpis: ["Policy coverage", "Policy compliance rate", "Policy awareness"],
      },
    ],
  }
  
  const mockLineageMappings = [
    {
      id: 1,
      name: "Production Data Flow",
      description: "Flow of production data from sensors to analytics",
      nodes: [
        { id: 101, name: "Well Sensors", type: "source", description: "Physical sensors at the wellhead" },
        { id: 102, name: "SCADA System", type: "processing", description: "Real-time monitoring and control system" },
        { id: 103, name: "Production DB", type: "storage", description: "Primary production database" },
        { id: 104, name: "Data Warehouse", type: "storage", description: "Enterprise data warehouse" },
        { id: 105, name: "Analytics Platform", type: "processing", description: "Advanced analytics system" },
        { id: 106, name: "Reporting System", type: "consumption", description: "Business intelligence reporting" },
      ],
      edges: [
        { id: 201, from: 101, to: 102, description: "Sensor data collection" },
        { id: 202, from: 102, to: 103, description: "Real-time data storage" },
        { id: 203, from: 103, to: 104, description: "ETL process for analytics" },
        { id: 204, from: 103, to: 105, description: "Direct feed for real-time analytics" },
        { id: 205, from: 104, to: 106, description: "Data for standard reports" },
        { id: 206, from: 105, to: 106, description: "Advanced analytics for reports" },
      ],
      owner: "Data Engineering",
      lastUpdated: "2023-09-28",
    },
    {
      id: 2,
      name: "Reservoir Management Flow",
      description: "Data flow for reservoir management processes",
      nodes: [
        { id: 111, name: "Geological Surveys", type: "source", description: "Raw geological survey data" },
        { id: 112, name: "Seismic Processing", type: "processing", description: "Seismic data processing systems" },
        { id: 113, name: "Reservoir DB", type: "storage", description: "Reservoir management database" },
        { id: 114, name: "Simulation Models", type: "processing", description: "Reservoir simulation systems" },
        { id: 115, name: "Decision Support", type: "consumption", description: "Decision support tools" },
      ],
      edges: [
        { id: 211, from: 111, to: 112, description: "Raw data processing" },
        { id: 212, from: 112, to: 113, description: "Processed data storage" },
        { id: 213, from: 113, to: 114, description: "Data for simulation" },
        { id: 214, from: 114, to: 115, description: "Simulation results for decisions" },
      ],
      owner: "Reservoir Engineering",
      lastUpdated: "2023-10-05",
    },
  ]
  
  