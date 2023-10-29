import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - NudeSafe',
};

export default function TermsPage() {
  return (
    <div className="prose lg:prose-lg mx-auto max-w-none px-32 py-20">
      <h2 className="mt-4 text-2xl font-bold">NudeSafe TERMS OF SERVICE</h2>
      <p className="mt-2">Updated as of October 28, 2023</p>

      <h3 className="mt-4 text-xl font-bold">
        1. Introduction and Acceptance of Terms
      </h3>
      <p className="mt-2">
        Welcome to NudeSafe, a service provided ("NudeSafe", "we", "us", "our").
        These Terms of Service ("Terms") govern your access to and use of
        NudeSafe's website, products, services, and any associated-content
        (collectively, the "Service"). By using the Service, you agree to these
        terms. If you do not agree to these terms, including the mandatory
        arbitration provision in Section 8, do not use the Service.
      </p>

      <h3 className="mt-4 text-xl font-bold">2. Service Eligibility</h3>
      <p className="mt-2">
        The Service is intended solely for persons who are 18 years old or
        older. By accessing or using the Service, you affirm that you are at
        least 18 years old.
      </p>

      <h3 className="mt-4 text-xl font-bold">3. Privacy</h3>
      <p className="mt-2">
        Please refer to our Privacy Policy for details on how we collect, use,
        and share your personal information.
      </p>

      <h3 className="mt-4 text-xl font-bold">
        4. Content Ownership and Usage Rights
      </h3>
      <p className="mt-2">
        You retain all ownership rights to your Content; however...
      </p>

      <h3 className="mt-4 text-xl font-bold">5. Content and Conduct</h3>
      <p className="mt-2">
        You retain all ownership rights to your Content; however, by uploading
        to NudeSafe, you grant us a broad license to use, reproduce, distribute,
        and display your Content.
      </p>

      <h3 className="mt-4 text-xl font-bold">
        6. Third-Party Services and Payments
      </h3>
      <p className="mt-2">
        Any transactions are done so at the discretion of the user, and NudeSafe
        takes no responsibility for transactions gone awry. If payments are not
        completed or are fraudulent, NudeSafe has the right to delete accounts
        or take appropriate action.
      </p>

      <h3 className="mt-4 text-xl font-bold">
        7. Dispute Resolution and Governing Law
      </h3>
      <p className="mt-2">
        These Terms are governed by the laws of the jurisdiction where NudeSafe
        is based. All claims arising out of or related to these Terms will be
        subject to arbitration.
      </p>

      <h3 className="mt-4 text-xl font-bold">8. Termination</h3>
      <p className="mt-2">
        These terms remain in effect while you use the Service. You may
        discontinue at any time. NudeSafe can terminate or suspend your account
        at any time at its discretion. Please note that this is a basic terms
        and conditions framework and may not be exhaustive. We strongly
        recommend seeking advice from legal professionals to ensure your terms
        cover all necessary areas effectively and are compliant with
        international, federal, state, and local laws.
      </p>
    </div>
  );
}
