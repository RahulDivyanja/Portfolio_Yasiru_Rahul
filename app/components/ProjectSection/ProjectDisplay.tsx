import { ProjectHero } from "./ProjectHero"
import { BeforeAfterSection } from "./BeforeAfterSection"
import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"
import { LargeReview } from "../LargeReview"
import { MoreProjectsSection } from "./MoreProjectsSection"
import { ProjectData } from "../../data/project-data"
import { RecruiterContact } from "../RecruiterContact"
import Script from "next/script"
import { buildProjectGraphMinimal } from "@/config/schemas"

const ProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  return (
    <main className="overflow-hidden">
      <Script
        id="id-project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProjectGraphMinimal(projectData.slug, projectData)),
        }}
      />
      <ProjectHero {...projectData.hero} />
      {projectData.beforeAfter && (
        <BeforeAfterSection
          heroBefore={projectData.beforeAfter.heroBefore}
          heroBeforeMobile={projectData.beforeAfter.heroBeforeMobile}
          iframe={projectData.beforeAfter.iframe}
          heroAfter={projectData.beforeAfter.heroAfter}
          beforeAltText={projectData.beforeAfter.beforeAltText}
          beforeMobileAltText={projectData.beforeAfter.beforeMobileAltText}
          afterAltText={projectData.beforeAfter.afterAltText}
        />
      )}
      <ResultsSection analyticCards={projectData.results} />
      <ApproachSection phases={projectData.phases} />
      <LargeReview {...projectData.review} />
      <MoreProjectsSection />
      <RecruiterContact />
    </main>
  )
}

export default ProjectDisplay
