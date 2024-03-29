import styles from './Comment.module.css';

import { Avatar } from './Avatar';

import { Trash, ThumbsUp } from '@phosphor-icons/react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/bandeirapk.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bandeira Magalhães</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="2021-05-11T08:13:00"
              >
                {' '}
                Publicado há 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
