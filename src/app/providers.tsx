// "use client";

// import { Provider } from "react-redux";
// import store from "@/components/redux/store";

// export default function Providers({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <Provider store={store}>{children}</Provider>;
// }

"use client";

import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "@/components/redux/store";

export default function Providers({ children }: any) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <Provider store={store}>
        {children}
      </Provider>
    </GoogleOAuthProvider>
  );
}
