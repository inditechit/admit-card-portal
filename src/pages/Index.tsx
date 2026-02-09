import { useState } from "react";
import { students } from "@/data/students";
import AdmitCard from "@/components/AdmitCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap } from "lucide-react";
import type { Student } from "@/data/students";

const Index = () => {
  const [studentId, setStudentId] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [foundStudent, setFoundStudent] = useState<Student | null>(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    setFoundStudent(null);

    if (!studentId || !selectedClass || !selectedSection) {
      setError("Please fill in all fields.");
      return;
    }

    const student = students.find(
      (s) =>
        s.studentId === studentId.trim() &&
        s.class === selectedClass &&
        s.section === selectedSection
    );

    if (student) {
      setFoundStudent(student);
    } else {
      setError("No student found with the given details. Please check and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container max-w-2xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8" />
            <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Admit Card Portal
            </h1>
          </div>
          <p className="text-primary-foreground/80 text-sm">
            Govt. Sarvodaya Bal Vidyalaya, Burari, Delhi - 84
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="container max-w-md mx-auto px-4 -mt-6">
        <div className="bg-card rounded-xl p-6 admit-card-shadow border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4 text-center">
            Enter Your Details
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Student ID</label>
              <Input
                placeholder="e.g. 20140222901"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Class</label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11">Class 11</SelectItem>
                    <SelectItem value="12">Class 12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Section</label>
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Section A</SelectItem>
                    <SelectItem value="B">Section B</SelectItem>
                    <SelectItem value="C">Section C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {error && (
              <p className="text-destructive text-sm text-center font-medium">{error}</p>
            )}

            <Button onClick={handleSearch} className="w-full">
              Get Admit Card
            </Button>
          </div>
        </div>
      </div>

      {/* Admit Card Display */}
      {foundStudent && (
        <div className="container max-w-2xl mx-auto py-10 px-4">
          <AdmitCard student={foundStudent} />
        </div>
      )}

      {/* Footer space */}
      <div className="h-12" />
    </div>
  );
};

export default Index;
