import { onMailer } from "../../mailer";

export const POST = async (req) => {
  const result = await onMailer(req);

  return new Response(
    JSON.stringify({ message: result.message }),
    {
      status: result.status,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
