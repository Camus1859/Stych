import { createStytchClient } from '@stytch/nextjs';

const stytch = createStytchClient(
  process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN!,
);

export default stytch;
