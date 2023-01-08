// Generated using "yarn build-templates"

export const meta = {
  name: "Komga",
  description:
    "Komga is a media server for your comics, mangas, BDs and magazines.",
  instructions: null,
  changeLog: [{ date: "2022-12-11", description: "first release" }],
  links: [
    { label: "Github", url: "https://github.com/gotson/komga" },
    { label: "Website", url: "https://komga.org" },
  ],
  contributors: [
    { name: "Supernova3339", url: "https://github.com/Supernova3339" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "komga",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "gotson/komga:0.157.5",
      },
    },
  },
  logo: "logo.svg",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
}
