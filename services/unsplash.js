import getConfig from "next/config";

const config = getConfig();

export const getPhotos = () => {
    /* Base url for API requests when deployed */
    const getBaseUrl = () => {
        if (
            typeof window === "undefined" &&
            config &&
            config.serverRuntimeConfig &&
            config.serverRuntimeConfig.processBaseUrl
        ) {
            return config.serverRuntimeConfig.processBaseUrl;
        }
        return "";
    };

    const serviceEndpoint = `${getBaseUrl()}/api`;

    /* Fetch random photo with a specific topic from our API integration with unsplash*/
    const getPhoto = async (params) => {
        try {
            const res = await fetch(
                `${serviceEndpoint}/unsplash/${JSON.stringify(params)}`,
                {
                    method: "GET",
                }
            );

            const result = await res.json();

            if (res.status !== 200) {
                console.error(`Error while retriving image`, result.message);
                throw new Error(result.message);
            }

            return result;
        } catch (error) {
            throw new Error(`Error while retriving image. ${error.toString()}`);
        }
    };

    return {
        getPhoto,
    };
};
