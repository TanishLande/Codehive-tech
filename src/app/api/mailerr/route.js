import { onMailerTwo } from "@/app/mailer2";

export const POST = async (req) => {
  const result = await onMailerTwo(req);

  return new Response(
    JSON.stringify({ message: result.message }),
    {
      status: result.status,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
