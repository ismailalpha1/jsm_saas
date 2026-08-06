'use client';

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { subjects } from "@/constants";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSubject = searchParams.get("subject") || "all";

  const handleSubjectChange = (value: string) => {
    let newUrl = "";

    if (value === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value,
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={handleSubjectChange} value={currentSubject}>
      <SelectTrigger>
        <SelectValue placeholder="Select a subject..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;