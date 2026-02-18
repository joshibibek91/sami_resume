import './globals.css';

export const metadata = {
  title: 'Samikshya Joshi | Senior Client Service Officer - NTG Australia',
  description: 'Portfolio of Samikshya Joshi, Senior Client Service Officer at the Account Receivable Unit, Department of Corporate and Digital Development, Northern Territory Government, Australia.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
