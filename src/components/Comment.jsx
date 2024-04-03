import { useState } from 'react';

import styles from './Comment.module.css';

import { Avatar } from './Avatar';

import { Trash, ThumbsUp } from '@phosphor-icons/react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  // const publishedDateFormatted = format(
  //   props.publishedAt,
  //   "d 'de' LLLL 'às' HH:mm'h'",
  //   {
  //     locale: ptBR,
  //   }
  // );

  // const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
  //   locale: ptBR,
  //   addSuffix: true,
  // });

  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

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
                Publicado há cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
