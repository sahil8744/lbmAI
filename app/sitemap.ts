import useContentful from "./lib/useContentful";

export default async function sitemap() {
  const baseUrl = "https://www.lbmsolution.com";

  const client = useContentful();

  // Get All Posts from CMS
  const blogs = await client.getBlogs();
  const postsUrls =
    blogs?.map((blog) => {
      const pageUrl = blog?.fields?.pageUrl;

      const formattedPageUrl =
        typeof pageUrl === "string"
          ? pageUrl.split(" ").join("-").toLowerCase()
          : "";

      return {
        url: `${baseUrl}/blogs/${formattedPageUrl}`,
        lastModified: new Date(),
        priority: 0.7,
      };
    }) ?? [];

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: `${baseUrl}/blockchain-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/centralized-exchange-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/crypto-banking-solution`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/crypto-coin-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/crypto-marketing-agency`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/crypto-token-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/crypto-trading-bot-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/crypto-wallet-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/cryptocurrency-development-services`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/cryptocurrency-exchange-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/cryptocurrency-payment-gateway-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/custom-crm-software-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/custom-software-development-services`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/dao-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/dapp-development-services`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/decentralized-exchange-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/defi-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/ico-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/metaverse-3d-space-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/metaverse-avatar-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/metaverse-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/metaverse-game-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/mobile-app-development-services`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/nft-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/nft-game-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/nft-marketplace-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/p2p-crypto-exchange-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/smart-contract-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/sto-development-company`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/whitelabel-crypto-cards`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/website-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/digital-marketing-agency`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/clone-script-app-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
    {
      url: `${baseUrl}/play-to-earn-game-development`,
      lastModified: new Date(),
      priority: 0.1,
    },
  ];

  return [...staticPages, ...postsUrls];
}
