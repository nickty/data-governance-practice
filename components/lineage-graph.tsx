"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RefreshCw } from "lucide-react"

export default function LineageGraph() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const dpr = window.devicePixelRatio || 1

    // Set canvas size accounting for device pixel ratio
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw lineage graph
    drawLineageGraph(ctx, rect.width, rect.height)
  }, [canvasRef])

  const drawLineageGraph = (ctx, width, height) => {
    // Define nodes
    const nodes = [
      { id: 1, name: "Well Sensors", x: 50, y: 100, width: 120, height: 60, color: "#f1f5f9" },
      { id: 2, name: "SCADA System", x: 250, y: 100, width: 120, height: 60, color: "#f1f5f9" },
      { id: 3, name: "Production DB", x: 450, y: 100, width: 120, height: 60, color: "#f1f5f9" },
      { id: 4, name: "Data Warehouse", x: 350, y: 220, width: 120, height: 60, color: "#f1f5f9" },
      { id: 5, name: "Analytics Platform", x: 550, y: 220, width: 120, height: 60, color: "#f1f5f9" },
      { id: 6, name: "Reporting System", x: 450, y: 340, width: 120, height: 60, color: "#f1f5f9" },
    ]

    // Define edges
    const edges = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 3, to: 5 },
      { from: 4, to: 6 },
      { from: 5, to: 6 },
    ]

    // Draw edges
    ctx.strokeStyle = "#94a3b8"
    ctx.lineWidth = 2

    edges.forEach((edge) => {
      const fromNode = nodes.find((n) => n.id === edge.from)
      const toNode = nodes.find((n) => n.id === edge.to)

      if (fromNode && toNode) {
        ctx.beginPath()
        ctx.moveTo(fromNode.x + fromNode.width, fromNode.y + fromNode.height / 2)

        // Create curved lines
        if (Math.abs(fromNode.y - toNode.y) < 10) {
          // Horizontal line
          ctx.lineTo(toNode.x, toNode.y + toNode.height / 2)
        } else {
          // Curved line
          const cp1x = fromNode.x + fromNode.width + 50
          const cp1y = fromNode.y + fromNode.height / 2
          const cp2x = toNode.x - 50
          const cp2y = toNode.y + toNode.height / 2
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, toNode.x, toNode.y + toNode.height / 2)
        }

        ctx.stroke()

        // Draw arrow
        const arrowSize = 8
        const angle = Math.atan2(
          toNode.y + toNode.height / 2 - (fromNode.y + fromNode.height / 2),
          toNode.x - (fromNode.x + fromNode.width),
        )

        ctx.beginPath()
        ctx.moveTo(toNode.x, toNode.y + toNode.height / 2)
        ctx.lineTo(
          toNode.x - arrowSize * Math.cos(angle - Math.PI / 6),
          toNode.y + toNode.height / 2 - arrowSize * Math.sin(angle - Math.PI / 6),
        )
        ctx.lineTo(
          toNode.x - arrowSize * Math.cos(angle + Math.PI / 6),
          toNode.y + toNode.height / 2 - arrowSize * Math.sin(angle + Math.PI / 6),
        )
        ctx.closePath()
        ctx.fillStyle = "#94a3b8"
        ctx.fill()
      }
    })

    // Draw nodes
    nodes.forEach((node) => {
      // Draw node rectangle
      ctx.fillStyle = node.color
      ctx.strokeStyle = "#64748b"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(node.x, node.y, node.width, node.height, 8)
      ctx.fill()
      ctx.stroke()

      // Draw node text
      ctx.fillStyle = "#0f172a"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(node.name, node.x + node.width / 2, node.y + node.height / 2)
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          <ZoomIn className="mr-2 h-4 w-4" />
          Zoom In
        </Button>
        <Button variant="outline" size="sm">
          <ZoomOut className="mr-2 h-4 w-4" />
          Zoom Out
        </Button>
        <Button variant="outline" size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
      <Card>
        <CardContent className="p-2">
          <canvas ref={canvasRef} style={{ width: "100%", height: "400px" }} />
        </CardContent>
      </Card>
      <div className="text-sm text-muted-foreground">
        <p>This lineage graph shows the flow of production data from wellhead sensors to reporting systems.</p>
      </div>
    </div>
  )
}

