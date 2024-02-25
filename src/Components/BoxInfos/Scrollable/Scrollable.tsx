import styles from './Scrollable.module.scss';

interface scrollableProps {
    title: string
}

const Scrollable = ({ title }: scrollableProps) => {
    return (
        <div className={styles.scrollable}>
            <h6 className={styles.title}>
                <div className={styles.indicator}></div>
                {title}
            </h6>
            <div className={styles.scrollbarWrapper}>
                <div className={styles.content}>
                    <p className={styles.section}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit ut quo consectetur iure eum corrupti, adipisci incidunt nemo earum dolore provident deserunt tempora et doloribus ipsum facere! Illo, unde.
                        Necessitatibus, eum excepturi aliquid, delectus modi amet praesentium harum iusto ipsum perspiciatis qui similique nulla molestias fugit nemo numquam autem illum dolorem? Nam repudiandae explicabo totam commodi asperiores. Sint, eius.
                        Placeat, omnis aperiam autem dicta porro excepturi id dolores temporibus et exercitationem praesentium provident culpa fugit minus impedit animi iure, quo sint cupiditate? Est exercitationem et quidem magni fuga tempore!
                        Voluptatibus, dolores. Molestias quis dicta similique, voluptas facilis tempora eius. Ducimus modi, aliquam unde magnam repudiandae quis, eius impedit repellat, facilis doloribus voluptatem illum quam cupiditate illo veritatis. Natus, ipsum!
                        Ea dolorum voluptatibus velit nemo commodi molestiae non omnis accusantium impedit porro praesentium incidunt delectus architecto, eligendi odio ratione quaerat totam enim aut voluptas autem, quidem iusto facilis. Harum, pariatur.
                        Nam animi architecto voluptatum numquam magnam inventore mollitia optio a, illo, dolore reprehenderit deleniti dicta blanditiis quibusdam reiciendis praesentium molestiae vero? Sequi, iusto nemo quam officiis beatae repellat mollitia excepturi.
                        Harum rerum dolorem quidem et quos dignissimos provident. Distinctio perspiciatis totam voluptates, adipisci vel rem incidunt quo debitis enim, ratione veniam expedita numquam odio sunt sapiente voluptatum. Ratione, rerum tempore.
                        Commodi porro voluptas iure, aliquid dolores recusandae nobis excepturi impedit unde, blanditiis minima molestiae minus repellat illum totam velit corrupti possimus aliquam necessitatibus. Assumenda accusamus praesentium veniam, reiciendis quae sunt!
                        Saepe tenetur, atque assumenda repellendus perspiciatis harum! Vel iure nam suscipit aliquid itaque sed eos sint? Quaerat cupiditate rem necessitatibus laboriosam vitae. Recusandae itaque sit, deserunt temporibus veniam commodi accusamus.
                        Sed harum, blanditiis error dolorum nostrum totam quas consectetur dolor enim nemo maxime aut minus aspernatur perspiciatis. Necessitatibus numquam aperiam possimus ullam dolores totam illum, ipsum, minima eum in quo.
                    </p>
                    <p className={styles.section}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit ut quo consectetur iure eum corrupti, adipisci incidunt nemo earum dolore provident deserunt tempora et doloribus ipsum facere! Illo, unde.
                        Necessitatibus, eum excepturi aliquid, delectus modi amet praesentium harum iusto ipsum perspiciatis qui similique nulla molestias fugit nemo numquam autem illum dolorem? Nam repudiandae explicabo totam commodi asperiores. Sint, eius.
                        Placeat, omnis aperiam autem dicta porro excepturi id dolores temporibus et exercitationem praesentium provident culpa fugit minus impedit animi iure, quo sint cupiditate? Est exercitationem et quidem magni fuga tempore!
                        Voluptatibus, dolores. Molestias quis dicta similique, voluptas facilis tempora eius. Ducimus modi, aliquam unde magnam repudiandae quis, eius impedit repellat, facilis doloribus voluptatem illum quam cupiditate illo veritatis. Natus, ipsum!
                        Ea dolorum voluptatibus velit nemo commodi molestiae non omnis accusantium impedit porro praesentium incidunt delectus architecto, eligendi odio ratione quaerat totam enim aut voluptas autem, quidem iusto facilis. Harum, pariatur.
                        Nam animi architecto voluptatum numquam magnam inventore mollitia optio a, illo, dolore reprehenderit deleniti dicta blanditiis quibusdam reiciendis praesentium molestiae vero? Sequi, iusto nemo quam officiis beatae repellat mollitia excepturi.
                        Harum rerum dolorem quidem et quos dignissimos provident. Distinctio perspiciatis totam voluptates, adipisci vel rem incidunt quo debitis enim, ratione veniam expedita numquam odio sunt sapiente voluptatum. Ratione, rerum tempore.
                        Commodi porro voluptas iure, aliquid dolores recusandae nobis excepturi impedit unde, blanditiis minima molestiae minus repellat illum totam velit corrupti possimus aliquam necessitatibus. Assumenda accusamus praesentium veniam, reiciendis quae sunt!
                        Saepe tenetur, atque assumenda repellendus perspiciatis harum! Vel iure nam suscipit aliquid itaque sed eos sint? Quaerat cupiditate rem necessitatibus laboriosam vitae. Recusandae itaque sit, deserunt temporibus veniam commodi accusamus.
                        Sed harum, blanditiis error dolorum nostrum totam quas consectetur dolor enim nemo maxime aut minus aspernatur perspiciatis. Necessitatibus numquam aperiam possimus ullam dolores totam illum, ipsum, minima eum in quo.
                    </p>
                    <p className={styles.section}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit ut quo consectetur iure eum corrupti, adipisci incidunt nemo earum dolore provident deserunt tempora et doloribus ipsum facere! Illo, unde.
                        Necessitatibus, eum excepturi aliquid, delectus modi amet praesentium harum iusto ipsum perspiciatis qui similique nulla molestias fugit nemo numquam autem illum dolorem? Nam repudiandae explicabo totam commodi asperiores. Sint, eius.
                        Placeat, omnis aperiam autem dicta porro excepturi id dolores temporibus et exercitationem praesentium provident culpa fugit minus impedit animi iure, quo sint cupiditate? Est exercitationem et quidem magni fuga tempore!
                        Voluptatibus, dolores. Molestias quis dicta similique, voluptas facilis tempora eius. Ducimus modi, aliquam unde magnam repudiandae quis, eius impedit repellat, facilis doloribus voluptatem illum quam cupiditate illo veritatis. Natus, ipsum!
                        Ea dolorum voluptatibus velit nemo commodi molestiae non omnis accusantium impedit porro praesentium incidunt delectus architecto, eligendi odio ratione quaerat totam enim aut voluptas autem, quidem iusto facilis. Harum, pariatur.
                        Nam animi architecto voluptatum numquam magnam inventore mollitia optio a, illo, dolore reprehenderit deleniti dicta blanditiis quibusdam reiciendis praesentium molestiae vero? Sequi, iusto nemo quam officiis beatae repellat mollitia excepturi.
                        Harum rerum dolorem quidem et quos dignissimos provident. Distinctio perspiciatis totam voluptates, adipisci vel rem incidunt quo debitis enim, ratione veniam expedita numquam odio sunt sapiente voluptatum. Ratione, rerum tempore.
                        Commodi porro voluptas iure, aliquid dolores recusandae nobis excepturi impedit unde, blanditiis minima molestiae minus repellat illum totam velit corrupti possimus aliquam necessitatibus. Assumenda accusamus praesentium veniam, reiciendis quae sunt!
                        Saepe tenetur, atque assumenda repellendus perspiciatis harum! Vel iure nam suscipit aliquid itaque sed eos sint? Quaerat cupiditate rem necessitatibus laboriosam vitae. Recusandae itaque sit, deserunt temporibus veniam commodi accusamus.
                        Sed harum, blanditiis error dolorum nostrum totam quas consectetur dolor enim nemo maxime aut minus aspernatur perspiciatis. Necessitatibus numquam aperiam possimus ullam dolores totam illum, ipsum, minima eum in quo.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Scrollable;
