import React from "react";

const ProjectCard = ({
  title,
  description,
  image = "/Analyzing.svg",
  tags,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) => {
  return (
    <div
      className={`bg-[url("https://brainstormtech.io/wp-content/uploads/2023/10/moo.jpg")] bg-cover bg-center bg-no-repeat h-96 w-2/5 rounded-xl relative overflow-hidden group`}
    >
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
      <h3 className="text-white text-2xl font-bold absolute bottom-4 left-4 z-10">
        {title}
      </h3>
      <p className="opacity-0 group-hover:opacity-100 text-white absolute p-4 z-10 mt-2">
        {description}
      </p>
      <div className="flex gap-2 absolute bottom-4 right-4 flex-wrap z-10 w-2/4 text-[12px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-white font-bold right-4 z-10 border-2 border-white rounded-full p-2 backdrop-blur-sm bg-white/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

/*

Thing In need in this.
Title : string
Description : string
Image : string
Tags : string[]s






*/
