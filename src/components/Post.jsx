import styles from './Post.module.css';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src="https://github.com/bandeirapk.png"
          />

          <div className={styles.authorInfo}>
            <strong>Bandeira Magalhães</strong>
            <span>Mobile Developer</span>
          </div>
        </div>

        <time
          title="25 de dezembro às 08:15"
          dateTime="2022-05-11 08:14:12"
        >
          Publicado há 1hr
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat </a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
