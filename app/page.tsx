import { Button } from "@mantine/core";
import styles from "./page.module.scss";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { IconBooks, IconHeartFilled, IconShare } from "@tabler/icons-react";
import Accordion from "@/components/Accordion/Accordion";

type accordionMenuType = {
  label: string,
  description: string,
}[]

const accordionMenu: accordionMenuType = [
  { label: "How do I log a movie?", description: `Simply search for the movie you watched, click on it, and select "Log as Watched." You can then rate and leave a comment.` },
  { label: "Is SawIT free to use?", description: "Yes, SawIT is completely free to use." },
  { label: "Can I share my movie diary with others?", description: "Yes, you can share your movie diary with friends through a unique link." },
  { label: "Is ther a limit how many movies I can rate?", description: "No, there is no limit. You can rate as many movies as you like." },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <h1 className={styles.title}>Start your<br />movie diary!</h1>
        <Button size="lg" radius="lg" className={`${styles.button} btn btn__primary`}>Get started!</Button>
        <div className={styles.bgImg}></div>
      </div>
      <Section title="Why SawIT" type="primary">
        <div className={styles.cardBox}>
          <Card icon={IconHeartFilled} title="Discover" description="Tell us what you like, and we'll recommend movies for you." />
          <Card icon={IconBooks} title="Track" description="Keep a record of every movie you watch. Log your ratings, write reviews." />
          <Card icon={IconShare} title="Share" description="Connect with friends and fellow movie lovers. Share your thoughts, reviews, and favorite films." />
        </div>
      </Section>
      <Section title="Watch, Rate, Share!" type="secondary">
          <p className={styles.sectionParagraph} >Your spot for tracking movies, giving them scores, and sharing your thoughts with friends.</p>
      </Section>
      <Section  title="Got questions?" type="primary">
        <Accordion data={accordionMenu} />
      </Section>
      <Section title="Start Today!" type="secondary">
        <Button size="lg" radius="lg" className={`${styles.button} btn`}>Sign Up!</Button>
      </Section>
    </div>
  );
}
