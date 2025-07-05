// app/components/Project.ts

import { projectType } from "../../../types/projectType";

export default class Project implements projectType {
  name: string;
  type: string;
  startDate: Date;
  endDate: Date;
  description: string;
  detailedDescription: string;
  technologies: string[];
  github: string;
  demo: string;
  date: string;
  imageFolder?: string;
  features?: string[];
  developmentDetails?: string;
  awards?: string[];

  constructor(data: projectType) {
    this.name = data.name;
    this.type = data.type;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.description = data.description;
    this.detailedDescription = data.detailedDescription;
    this.technologies = data.technologies;
    this.github = data.github;
    this.demo = data.demo;
    this.date = data.date;
    this.imageFolder = data.imageFolder;
    this.features = data.features;
    this.developmentDetails = data.developmentDetails;
    this.awards = data.awards;
  }

  get isPresent(): boolean {
    return this.date.toLowerCase().includes("present");
  }

  getEndTimeForSort(): number {
    return this.isPresent ? Infinity : this.endDate.getTime();
  }

  getStartTimeForSort(): number {
    return this.startDate.getTime();
  }
}
