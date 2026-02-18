import './globals.css';

export const metadata = {
  title: 'PikMe Portfolio Resume',
  description: 'Personal portfolio website inspired by the provided design samples.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
