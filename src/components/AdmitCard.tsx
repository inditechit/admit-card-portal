import { useRef } from "react";
import { Student, examSchedule } from "@/data/students";
import schoolLogo from "@/assets/school-logo.png";

interface AdmitCardProps {
  student: Student;
}

const AdmitCard = ({ student }: AdmitCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center px-4">
      <div
        ref={cardRef}
        className="w-full max-w-[520px] bg-card border-2 border-primary rounded-lg p-8 admit-card-shadow"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-2">
          <img src={schoolLogo} alt="School Logo" className="w-16 h-16 object-contain" />
          <div className="flex-1">
            <h2 className="text-primary font-bold text-lg italic leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Govt. Sarvodaya Bal Vidyalaya
            </h2>
            <p className="text-primary font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>
              Burari, Delhi - 84
            </p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-xl font-extrabold text-foreground my-4 tracking-wide underline underline-offset-4">
          ADMIT CARD
        </h3>

        <hr className="border-foreground mb-4" />

        {/* Student Info */}
        <div className="space-y-1 text-sm mb-6">
          <p><span className="font-bold">Student ID:</span> {student.studentId}</p>
          <p><span className="font-bold">Roll Number:</span> {student.rollNumber}</p>
          <p><span className="font-bold">Name:</span> {student.name}</p>
          <p><span className="font-bold">Father's Name:</span> {student.fatherName}</p>
          <p><span className="font-bold">Class & Section:</span> {student.class} - {student.section}</p>
        </div>

        {/* Exam Schedule Table */}
        <table className="w-full border-collapse text-sm mb-6">
          <thead>
            <tr className="border border-foreground">
              <th className="border border-foreground px-3 py-2 text-left font-bold">Date</th>
              <th className="border border-foreground px-3 py-2 text-left font-bold">Subject</th>
              <th className="border border-foreground px-3 py-2 text-left font-bold">Time</th>
            </tr>
          </thead>
          <tbody>
            {examSchedule.map((exam, i) => (
              <tr key={i} className="border border-foreground">
                <td className="border border-foreground px-3 py-2">{exam.date}</td>
                <td className="border border-foreground px-3 py-2">{exam.subject}</td>
                <td className="border border-foreground px-3 py-2">{exam.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Notes */}
        <div className="text-sm">
          <p className="font-bold mb-2">Note:</p>
          <ul className="space-y-1 pl-4">
            <li className="flex gap-1">
              <span className="font-bold text-primary">➤</span>
              <span className="font-bold">Entry Starts from 1:30 PM - 2:00 PM</span>
            </li>
            <li className="flex gap-1">
              <span className="font-bold text-primary">➤</span>
              <span className="font-bold">
                All students must be seated at their respective seats by 2:00 PM. Entry into the examination room will not be permitted after 2:00 PM.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdmitCard;
