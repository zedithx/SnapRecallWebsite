import type { SVGProps } from "react";

function SvgIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M4.5 8.5h3l1.4-2h6.2l1.4 2h3A1.5 1.5 0 0 1 21 10v7.5A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5V10A1.5 1.5 0 0 1 4.5 8.5Z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </SvgIcon>
  );
}

export function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z" />
      <path d="m19 13 .7 2 .3.7 2 .7-2 .7-.3.7-.7 2-.7-2-.7-.3-2-.7 2-.7.7-.7.7-2Z" />
      <path d="m5 14 .9 2.5L8.5 17l-2.6.5L5 20l-.9-2.5L1.5 17l2.6-.5L5 14Z" />
    </SvgIcon>
  );
}

export function MessageCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M6 18.5 3.5 20l.7-3.4A8 8 0 1 1 20 12.5a8 8 0 0 1-8 8c-1.3 0-2.5-.3-3.6-.8L6 18.5Z" />
    </SvgIcon>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3.5 5.5 6v5.4c0 4 2.7 7.6 6.5 9.1 3.8-1.5 6.5-5.1 6.5-9.1V6L12 3.5Z" />
      <path d="m9.5 12 1.6 1.6 3.6-3.6" />
    </SvgIcon>
  );
}

export function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m3 10 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11.7V15c0 1.4 2.3 2.8 5 2.8s5-1.4 5-2.8v-3.3" />
      <path d="M21 10v5" />
    </SvgIcon>
  );
}

export function PlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M21 3 10 14" />
      <path d="m21 3-6.5 18-3.3-7.7L3.5 10 21 3Z" />
    </SvgIcon>
  );
}

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M4 12h16" />
    </SvgIcon>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4" />
      <path d="M12 3.5c2.4 2.4 3.8 5.3 3.8 8.5s-1.4 6.1-3.8 8.5c-2.4-2.4-3.8-5.3-3.8-8.5s1.4-6.1 3.8-8.5Z" />
    </SvgIcon>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </SvgIcon>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m5 12.5 4.2 4.2L19 7" />
    </SvgIcon>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m6 9 6 6 6-6" />
    </SvgIcon>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </SvgIcon>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </SvgIcon>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </SvgIcon>
  );
}

export function ZapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M13 2 5.5 13h5l-1 9L18.5 11h-5L13 2Z" />
    </SvgIcon>
  );
}
