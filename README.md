

```md
# Receipt Scanner & Finance Tracker

A **Next.js** project that utilizes **Gemini AI** to scan receipts, extract text, and track financial data. It also integrates **Resend** to send **weekly and monthly** finance summary notifications.

## Features

- 📸 **Receipt Scanning**: Upload an image of a receipt, and **Gemini AI** extracts key details.
- 📊 **Finance Tracker**: Stores extracted data for expense tracking.
- 📩 **Email Notifications**: Sends **weekly and monthly** finance summaries using **Resend**.

## Tech Stack

- **Next.js** – React framework for SSR and API routes.
- **Google Gemini AI** – OCR & NLP for receipt text extraction.
- **Resend** – Email service for sending notifications.
- **Prisma ORM** – Database management for storing expense data.
- **Neon** – PostgreSQL database for cloud-based storage.
- **Tailwind CSS** – Styling for UI.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Blackie360/AI-finance-tracker
   ```
2. **Navigate into the project directory and install dependencies:**
   ```sh
   cd AI-finance-tracker
   pnpm install
   ```
3. **Set up environment variables:**  
   Create a `.env.local` file and add the following:
   ```sh
   NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
   DATABASE_URL=your-neon-postgres-url
   RESEND_API_KEY=your-resend-api-key
   ```
4. **Run the development server:**
   ```sh
   pnpm dev
   ```


```  
