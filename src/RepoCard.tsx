/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B8do86r31fL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export default function RepoCard({
  repo,
  className,
}: {
  repo: any;
  className?: string;
}) {
  console.log(repo);
  return (
    <Card className={`w-full max-w-2xl ${className ?? ""}`}>
      <div className="flex items-start justify-between gap-2">
        <CardHeader>
          <CardTitle className="flex items-end gap-1">
            <span className="font-normal text-muted-foreground">
              {repo.owner.login} /
            </span>
            {/* <div className="h-6 w-px relative skew-x-5 border-r" /> */}
            {repo.name}
          </CardTitle>
          <CardDescription>
            {repo.description || (
              <span className="text-muted italic">No description</span>
            )}
          </CardDescription>
        </CardHeader>
        <div className="flex items-center gap-2 p-6">
          {/* TODO: Get another repo */}
          <Button variant="secondary" className="px-3 shadow-none">
            Next
          </Button>
          {/* TODO: Link */}
          <Button className="px-3 shadow-none">Open</Button>
        </div>
      </div>
      <CardContent>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleDotIcon className="w-3 h-3 mr-1" />
            {repo.language}
          </div>
          <div className="flex items-center">
            <StarIcon className="w-3 h-3 mr-1" />
            {repo.stargazers_count}
          </div>
          {/* <div>Updated April 2023</div> */}
        </div>
      </CardContent>
    </Card>
  );
}

function CircleDotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
