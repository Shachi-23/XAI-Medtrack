import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Brain, FileText, BarChart3 } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">XAI-MedTrack Dashboard</h1>
          <p className="text-gray-500">Monitor your MRI scans and AI analysis</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Uploads Card */}
          <Link href="/longitudinal${}">
            <Card className="hover:shadow-md transition-shadow bg-gray-900 text-white h-full">
              <CardContent className="p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium">Uploads</h3>
                  <Upload className="h-5 w-5 text-gray-300" />
                </div>
                <p className="text-2xl font-bold mt-4">361 scans</p>
              </CardContent>
            </Card>
          </Link>

          {/* AI Processing Card */}
          <Link href="/processing">
            <Card className="hover:shadow-md transition-shadow bg-gray-900 text-white h-full">
              <CardContent className="p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium">AI Processing</h3>
                  <Brain className="h-5 w-5 text-gray-300" />
                </div>
                <p className="text-2xl font-bold mt-4">361 scans</p>
              </CardContent>
            </Card>
          </Link>

          {/* Results Card */}
          <Link href="/results">
            <Card className="hover:shadow-md transition-shadow bg-gray-900 text-white h-full">
              <CardContent className="p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium">Results</h3>
                  <BarChart3 className="h-5 w-5 text-gray-300" />
                </div>
                <p className="text-2xl font-bold mt-4">361 results</p>
              </CardContent>
            </Card>
          </Link>

          {/* Reports Card */}
          <Link href="/reports">
            <Card className="hover:shadow-md transition-shadow bg-gray-900 text-white h-full">
              <CardContent className="p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium">Reports</h3>
                  <FileText className="h-5 w-5 text-gray-300" />
                </div>
                <p className="text-2xl font-bold mt-4">361 reports</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <p className="font-medium">Patient XYZ (ID: 12)</p>
                    <p className="text-sm text-gray-500">MRI scan processed</p>
                  </div>
                  <span className="text-sm text-gray-500">Today, 10:30 AM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <p className="font-medium">Patient ABC (ID: 45)</p>
                    <p className="text-sm text-gray-500">New report generated</p>
                  </div>
                  <span className="text-sm text-gray-500">Yesterday, 3:15 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <p className="font-medium">Patient DEF (ID: 78)</p>
                    <p className="text-sm text-gray-500">Longitudinal analysis updated</p>
                  </div>
                  <span className="text-sm text-gray-500">Mar 15, 2023, 11:45 AM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

