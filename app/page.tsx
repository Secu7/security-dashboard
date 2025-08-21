"use client"

import { useState } from "react"
import {
  ChevronRight,
  Shield,
  AlertTriangle,
  Activity,
  Settings,
  Bell,
  RefreshCw,
  Eye,
  Cloud,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"

// Sample data for charts
const threatSeverityData = [
  { name: "Critical", value: 12, color: "#ef4444" },
  { name: "High", value: 28, color: "#f97316" },
  { name: "Medium", value: 45, color: "#eab308" },
  { name: "Low", value: 89, color: "#22c55e" },
]

const threatCategoriesData = [
  { name: "Phishing", count: 34 },
  { name: "Malware", count: 28 },
  { name: "Insider Threat", count: 15 },
  { name: "Account Takeover", count: 12 },
  { name: "Ransomware", count: 8 },
]

const attackVectorsData = [
  { name: "Email", count: 45 },
  { name: "Web App", count: 32 },
  { name: "RDP", count: 18 },
  { name: "Cloud Login", count: 15 },
  { name: "USB/Physical", count: 7 },
]

const failedLoginsData = [
  { time: "00:00", attempts: 12 },
  { time: "04:00", attempts: 8 },
  { time: "08:00", attempts: 25 },
  { time: "12:00", attempts: 18 },
  { time: "16:00", attempts: 32 },
  { time: "20:00", attempts: 15 },
]

const renderContent = (section: string) => {
  switch (section) {
    case "threats":
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Active Threats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">23</div>
                <p className="text-xs text-muted-foreground">Currently being monitored</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Blocked Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">342</div>
                <p className="text-xs text-muted-foreground">Threats neutralized</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Risk Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-500">MEDIUM</div>
                <p className="text-xs text-muted-foreground">Current threat level</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Threat Intelligence Feed</CardTitle>
              <CardDescription>Real-time threat monitoring and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">CRITICAL</Badge>
                    <span className="text-sm font-medium">Advanced Persistent Threat Detected</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Suspicious network activity from IP 192.168.1.45 - potential data exfiltration attempt
                  </p>
                </div>
                <div className="p-4 border border-orange-500/20 bg-orange-500/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-500">HIGH</Badge>
                    <span className="text-sm font-medium">Malware Signature Match</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Known ransomware variant detected in email attachment - quarantined automatically
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    case "incidents":
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Open Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">3</div>
                <p className="text-xs text-muted-foreground">Requiring attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Resolved Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">12</div>
                <p className="text-xs text-muted-foreground">Successfully closed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">4.2m</div>
                <p className="text-xs text-muted-foreground">Minutes to first response</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">SLA Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">98%</div>
                <p className="text-xs text-muted-foreground">Within target timeframes</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Active Incident Response</CardTitle>
              <CardDescription>Current security incidents and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">P1</Badge>
                      <span className="font-medium">INC-2024-001</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Assigned to: Security Team Alpha</span>
                  </div>
                  <p className="text-sm mb-2">Suspected data breach - unauthorized access to customer database</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Created: 2 hours ago</span>
                    <span>Status: Investigating</span>
                    <span>ETA: 4 hours</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    case "compliance":
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Overall Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">87%</div>
                <Progress value={87} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Policy Violations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">5</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Audit Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">READY</div>
                <p className="text-xs text-muted-foreground">All requirements met</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Frameworks</CardTitle>
                <CardDescription>Current compliance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>SOC 2 Type II</span>
                      <span className="text-primary">92%</span>
                    </div>
                    <Progress value={92} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>ISO 27001</span>
                      <span className="text-primary">88%</span>
                    </div>
                    <Progress value={88} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>GDPR</span>
                      <span className="text-primary">95%</span>
                    </div>
                    <Progress value={95} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Audits</CardTitle>
                <CardDescription>Audit history and findings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">SOC 2 Annual Review</span>
                      <p className="text-xs text-muted-foreground">Completed with minor findings</p>
                    </div>
                    <Badge variant="outline">PASSED</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium">PCI DSS Assessment</span>
                      <p className="text-xs text-muted-foreground">All requirements satisfied</p>
                    </div>
                    <Badge variant="outline">PASSED</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    case "endpoints":
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Endpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">1,247</div>
                <p className="text-xs text-muted-foreground">Across all locations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Protected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">1,198</div>
                <p className="text-xs text-muted-foreground">96% coverage</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">At Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">49</div>
                <p className="text-xs text-muted-foreground">Require attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Threats Blocked</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">342</div>
                <p className="text-xs text-muted-foreground">Today</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    case "cloud":
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Cloud Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">847</div>
                <p className="text-xs text-muted-foreground">Monitored resources</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Misconfigurations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-500">12</div>
                <p className="text-xs text-muted-foreground">Require remediation</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Security Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">B+</div>
                <p className="text-xs text-muted-foreground">Above average</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    case "settings":
      return (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Security system settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">Real-time Monitoring</span>
                    <p className="text-xs text-muted-foreground">Enable continuous threat detection</p>
                  </div>
                  <Badge variant="outline">ENABLED</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">Auto-Response</span>
                    <p className="text-xs text-muted-foreground">Automatically respond to known threats</p>
                  </div>
                  <Badge variant="outline">ENABLED</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">Email Notifications</span>
                    <p className="text-xs text-muted-foreground">Send alerts via email</p>
                  </div>
                  <Badge variant="outline">ENABLED</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    default:
      return (
        <div className="space-y-6">
          {/* Security Events Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Events Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">174</div>
                <p className="text-xs text-muted-foreground">+12% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Critical Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">12</div>
                <p className="text-xs text-muted-foreground">Requires immediate attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">MFA Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">87%</div>
                <Progress value={87} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Security Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">B+</div>
                <p className="text-xs text-muted-foreground">Good security posture</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Real-time Alert Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Live Alert Feed</CardTitle>
                <CardDescription>Most recent security events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      id: 1,
                      type: "Critical",
                      message: "Suspicious login from unknown location",
                      time: "2 min ago",
                      severity: "critical",
                    },
                    {
                      id: 2,
                      type: "High",
                      message: "Multiple failed login attempts detected",
                      time: "5 min ago",
                      severity: "high",
                    },
                    {
                      id: 3,
                      type: "Medium",
                      message: "Unusual data transfer volume",
                      time: "12 min ago",
                      severity: "medium",
                    },
                    {
                      id: 4,
                      type: "High",
                      message: "Potential phishing email reported",
                      time: "18 min ago",
                      severity: "high",
                    },
                    { id: 5, type: "Low", message: "Software update available", time: "25 min ago", severity: "low" },
                  ].map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            alert.severity === "critical"
                              ? "destructive"
                              : alert.severity === "high"
                                ? "default"
                                : alert.severity === "medium"
                                  ? "secondary"
                                  : "outline"
                          }
                        >
                          {alert.type}
                        </Badge>
                        <span className="text-sm">{alert.message}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Threat Severity Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Threat Severity Distribution</CardTitle>
                <CardDescription>Current threat landscape</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={threatSeverityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {threatSeverityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {threatSeverityData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs">
                        {item.name}: {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Threat Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Top Threat Categories</CardTitle>
                <CardDescription>Most common attack types</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={threatCategoriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Attack Vectors */}
            <Card>
              <CardHeader>
                <CardTitle>Attack Vectors</CardTitle>
                <CardDescription>Common entry points</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={attackVectorsData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="count" fill="hsl(var(--accent))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Failed Login Attempts */}
            <Card>
              <CardHeader>
                <CardTitle>Failed Login Attempts</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart data={failedLoginsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="attempts"
                      stroke="hsl(var(--destructive))"
                      fill="hsl(var(--destructive))"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Patch Compliance */}
            <Card>
              <CardHeader>
                <CardTitle>Patch Compliance</CardTitle>
                <CardDescription>System update status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>OS Patches</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Applications</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="mt-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Security Tools</span>
                      <span>98%</span>
                    </div>
                    <Progress value={98} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Endpoint Security Health */}
            <Card>
              <CardHeader>
                <CardTitle>Endpoint Security</CardTitle>
                <CardDescription>Agent deployment status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1,247</div>
                    <p className="text-sm text-muted-foreground">Total Endpoints</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Protected</span>
                      <span className="text-primary">1,198 (96%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Unprotected</span>
                      <span className="text-destructive">49 (4%)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Threats Blocked</span>
                      <span className="text-primary">342 today</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
  }
}

export default function CybersecurityDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`${sidebarCollapsed ? "w-16" : "w-72"} bg-sidebar-background border-r border-sidebar-border transition-all duration-300 fixed md:relative z-50 md:z-auto h-full`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className={`${sidebarCollapsed ? "hidden" : "block"}`}>
              <h1 className="text-primary font-black text-xl tracking-wider">CYBERSEC OPS</h1>
              <p className="text-muted-foreground text-xs">Security Operations Center</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-muted-foreground hover:text-primary"
            >
              <ChevronRight className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`} />
            </Button>
          </div>

          <nav className="space-y-2">
            {[
              { id: "overview", icon: Shield, label: "SECURITY OVERVIEW" },
              { id: "threats", icon: AlertTriangle, label: "THREAT MONITORING" },
              { id: "incidents", icon: Activity, label: "INCIDENT RESPONSE" },
              { id: "compliance", icon: Lock, label: "COMPLIANCE" },
              { id: "endpoints", icon: Eye, label: "ENDPOINT SECURITY" },
              { id: "cloud", icon: Cloud, label: "CLOUD SECURITY" },
              { id: "settings", icon: Settings, label: "SETTINGS" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${
                  activeSection === item.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent/50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          {!sidebarCollapsed && (
            <div className="mt-8 p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-card-foreground font-semibold">SYSTEM STATUS</span>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <div>UPTIME: 99.9%</div>
                <div>ENDPOINTS: 1,247 MONITORED</div>
                <div>ACTIVE THREATS: 23</div>
                <div>INCIDENTS: 3 OPEN</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              SECURITY OPERATIONS / <span className="text-primary font-semibold">{activeSection.toUpperCase()}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-muted-foreground">LAST UPDATE: {new Date().toLocaleString()}</div>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">{renderContent(activeSection)}</div>
      </div>
    </div>
  )
}
