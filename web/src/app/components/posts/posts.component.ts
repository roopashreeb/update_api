

// import { Component } from '@angular/core';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   image: string | null;
//   timestamp: string;
// }

// @Component({
//   selector: 'app-posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.scss']
// })
// export class PostsComponent {
//   posts: Post[] = [
//     {
//       id: 1,
//       title: "Hello world!",
//       body: "This is my first post on this social network.",
//       image: "https://picsum.photos/id/237/500/300",
//       timestamp: "2023-04-17T10:30:00.000Z"
//     },
//     {
//       id: 2,
//       title: "Check out my new pet!",
//       body: "I just adopted a new kitten and she's so cute!",
//       image: "https://picsum.photos/id/1079/500/300",
//       timestamp: "2023-04-16T15:45:00.000Z"
//     },
//     {
//       id: 3,
//       title: "Let's grab coffee!",
//       body: "Who's free for a coffee break today?",
//       image: null,
//       timestamp: "2023-04-15T09:20:00.000Z"
//     },
//     {
//       id: 4,
//       title: "Movie night anyone?",
//       body: "I'm thinking about hosting a movie night at my place tonight. Who's in?",
//       image: "https://picsum.photos/id/1015/500/300",
//       timestamp: "2023-04-14T19:00:00.000Z"
//     },
//     {
//       id: 5,
//       title: "Happy birthday to my best friend!",
//       body: "Wishing my best friend a happy birthday today! 🎉🎂🎁",
//       image: null,
//       timestamp: "2023-04-13T08:00:00.000Z"
//     }
//   ];
// }

//   import { Component } from '@angular/core';

// interface Post {
//   title: string;
//   body: string;
//   timestamp: Date;
//   comments: Comment[];
// }

// interface Comment {
//   author: string;
//   text: string;
//   timestamp: Date;
// }

// @Component({
//   selector: 'app-posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.scss']
// })
// export class PostsComponent {
//   posts: Post[] = [
//     {
//       title: 'Post 1',
//       body: 'This is the body of Post 1',
//       timestamp: new Date(),
//       comments: []
//     },
//     {
//       title: 'Post 2',
//       body: 'This is the body of Post 2',
//       timestamp: new Date(),
//       comments: []
//     },
//     {
//       title: 'Post 3',
//       body: 'This is the body of Post 3',
//       timestamp: new Date(),
//       comments: []
//     }
//   ];

//   addComment(post: Post, author: string, text: string) {
//     const newComment: Comment = {
//       author,
//       text,
//       timestamp: new Date()
//     };
//     post.comments.push(newComment);
//   }
// }

import { Component } from '@angular/core';

interface Post {
  title: string;
  body: string;
  timestamp: Date;
  comments: Comment[];
}

interface Comment {
  author: string;
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [
    {
      title: 'Post 1',
      body: 'This is my first post on this social network.',
      timestamp: new Date(),
      comments: []
    },
    {
      title: "Check out my new pet!",
      body: "I just adopted a new kitten and she's so cute!",
      timestamp: new Date(),
      comments: []
    },
    {
      title: "Happy birthday to my best friend!",
      body: "Wishing my best friend a happy birthday today! 🎉🎂🎁",
      timestamp: new Date(),
      comments: []
    }
  ];

  addComment(post: Post, author: string, text: string) {
    const newComment: Comment = {
      author,
      text,
      timestamp: new Date()
    };
    post.comments.push(newComment);
  }
}
