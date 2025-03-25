import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const query = `
    mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
    subscribeToNewsletter(input: $input) {status}}
  `;

  const getOptions = (currentEmail) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          input: {
            publicationId: "638980f9bc608d676e463a68",
            email: currentEmail,
          },
        },
      }),
    };

    return options;
  };

  const subscribe = () => {
    if (!email) return;

    fetch("https://gql.hashnode.com", getOptions(email))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmail("");
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  };

  return (
    <div className="w-full flex items-center">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="bg-slate-100 dark:bg-slate-800 py-4 px-4 font-poppins outline-none  rounded-l-md w-full placeholder:select-none dark:text-white text-xs md:text-base"
      />
      <button
        onClick={subscribe}
        className="bg-blue-600 py-4 px-4 text-white font-poppins rounded-r-md text-xs md:text-base"
      >
        Subscribe
      </button>
    </div>
  );
};

export default Newsletter;
