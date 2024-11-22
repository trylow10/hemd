import "./globals.css";

export const metadata = {
  title: "META Research Group",
  description: "Welcome to the META Research Group website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
