export type tParams = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
    { lang: "fa" },
    { lang: "ar" },
    { lang: "pt" },
  ];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: tParams;
}>) {
  return children;
}
