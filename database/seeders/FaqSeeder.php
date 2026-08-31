<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Faq;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        Faq::create([
            'faq_question' => 'Tell us more about yourself, who you are and what is your background',
            'faq_answer' => "I'm a Fullstack Developer and IT Specialist in Application Development with 3+ years of experience, mainly in frontend development. My strongest area is React, JavaScript, HTML and CSS as well as low-/ no-code tool such as Webflow, bubble.io, and WordPress. Besides that during my vocational training I've deliberately expanded more into backend development with Java, Python, PHP, Laravel and SQL. I've worked on real client projects, freelance projects and my own applications, so I enjoy both building things and understanding the bigger picture behind them. I'm naturally curious, I learn best by doing, and I'm now looking for a team where I can contribute my existing experience while continuing to grow as a Fullstack Developer.",
            'featured' => true,
            'sort_order' => 1,
        ]);

        Faq::create([
            'faq_question' => 'What experience do you already have with AI automation and the application of AI in software development?',
            'faq_answer' => "I'm still developing my experience in this area, so I wouldn't describe myself as an AI specialist yet. But I'm very interested in how AI can be used practically in development and automation. I already have experience with automation through tools like Make, and I regularly use AI-assisted development such as chatGPT or even Claude to research solutions, understand unfamiliar technologies, generate ideas and speed up repetitive tasks. At the same time, I'm careful not to blindly trust AI-generated code. I always want to understand, test and validate what I'm using. For me, AI is a tool that can make developers more efficient, not a replacement for understanding the technology.",
            'featured' => true,
            'sort_order' => 2,
        ]);

        Faq::create([
            'faq_question' => 'What does a good working environment look like for you?',
            'faq_answer' => "For me, it's an environment where people communicate openly, help each other and are comfortable sharing ideas. I don't want to simply receive tickets and implement them without understanding the context. I like knowing why something is being built, contributing ideas and taking responsibility for the solution. At the same time, I really value experienced colleagues from whom I can learn. Ideally, it's a team where everyone brings something different and you grow together.",
            'featured' => true,
            'sort_order' => 3,
        ]);

        Faq::create([
            'faq_question' => 'What is your role and responsibility as a volunteer at VJF?',
            'faq_answer' => "I've been supporting VJF since 2023, mainly around their website and digital presence. My responsibilities include maintaining and developing the website, helping with new requirements and advising when more complex implementations are needed. More recently, I've also been working on the conceptual and technical modernization of the website, including moving toward a more modern technical and structural approach. What I particularly like about this experience is that I'm not just implementing predefined tasks. I have to understand the requirements, think about possible solutions and sometimes make decisions independently.",
            'featured' => true,
            'sort_order' => 4,
        ]);

        Faq::create([
            'faq_question' => 'Have you ever had to work on a project where the requirements were unclear, and how did you handle this unexpected situation?',
            'faq_answer' => "Yes, especially when working on client projects. Requirements are not always completely clear at the beginning, and sometimes they change during development. My first step is usually to clarify what the actual goal is rather than immediately starting to code. I ask questions, discuss possible solutions and try to identify what is really important for the user or client. If something is still unclear, I prefer to build or test a small solution first instead of making a large assumption. That way, you can get feedback early and avoid spending a lot of time going in the wrong direction. Most grateful way is your colleagues who might have gone throuth same path. This is what teamwork about!",
            'featured' => true,
            'sort_order' => 5,
        ]);

        Faq::create([
            'faq_question' => 'What is your experience with Scrum?',
            'faq_answer' => "I gained theoretical and practical knowledge of Scrum during my vocational training and have also worked in agile environments professionally. I'm familiar with concepts such as sprints, planning, daily stand-ups, retrospectives and working with a backlog. For me, the most important part of Scrum is actually the communication and transparency behind it. I like the idea of breaking larger problems into manageable tasks, getting feedback regularly and improving the way the team works over time.",
            'featured' => true,
            'sort_order' => 6,
        ]);

        Faq::create([
            'faq_question' => 'Where do you see your biggest weaknesses and strengths?',
            'faq_answer' => "One of my strengths is definitely that I'm a fast learner. When I encounter a technology I don't know, I'm usually comfortable getting into it independently. I've demonstrated that before with technologies like Webflow and Bubble, where I became productive relatively quickly in real client projects. I'm also persistent. If I don't understand something, I usually don't just move on; I want to understand why it works. My biggest weakness is probably that I sometimes spend too much time trying to find the perfect solution. I've learned that sometimes a good, maintainable solution delivered at the right time is better than trying to optimize everything immediately. That's something I continue to work on.",
            'featured' => true,
            'sort_order' => 7,
        ]);

        Faq::create([
            'faq_question' => 'How do you react when you do not know something?',
            'faq_answer' => "I'm actually quite comfortable saying that I don't know something. For me, the important part is what I do afterwards. I first try to understand the problem myself through documentation, research and testing. If I'm still stuck, I ask my next buddy from my team with more experience rather than wasting hours going in circles. I see not knowing something as a normal part of development. There are always new technologies and problems, so I think curiosity and the ability to learn are more important than knowing everything from the beginning.",
            'featured' => true,
            'sort_order' => 8,
        ]);

        Faq::create([
            'faq_question' => 'Would you be willing to move for a job?',
            'faq_answer' => "Yes, I'm generally open to relocation. Hamburg is currently my preferred location, but I'm also open to opportunities elsewhere in Germany if the position and team are a really good fit. For me, the actual opportunity, the people and the long-term perspective are more important than being tied to one specific city. I'm also open to hybrid or remote arrangements depending on the company. I am an advaturos person and like moving forwards even if my next role in future based in the United States and require on-site team support. I'd gratefully see it as the biggest oppurtunity to descover the world not only work-related but also privately.",
            'featured' => true,
            'sort_order' => 9,
        ]);

        Faq::create([
            'faq_question' => 'What are your expectations regarding salary?',
            'faq_answer' => "Based on my experience, my vocational training and the responsibilities of the position, I'm currently looking in the range of 45k - 55k gross per year. That said, I'm flexible depending on the overall package, the responsibilities, development opportunities and the position itself. For me, it's important that the salary is fair for the role and that there is a clear perspective for further development.",
            'featured' => true,
            'sort_order' => 10,
        ]);

        Faq::create([
            'faq_question' => 'How do you handle criticism or code review?',
            'faq_answer' => "Very openly. I see code review primarily as a way to improve the code and learn from other developers. Of course, nobody likes being told that something they built could be better, but I don't take that personally. If someone has a better or more maintainable approach, I want to understand why and learn from it. I also think good code review should be a two-way process: constructive, respectful and focused on the solution rather than the person.",
            'featured' => true,
            'sort_order' => 11,
        ]);

        Faq::create([
            'faq_question' => 'Why should we hire you?',
            'faq_answer' => "I think I bring a combination of practical experience, curiosity and a strong willingness to grow. I already have several years of experience building real web applications, particularly with Webflow or Bubble.io and I've worked with clients as well as independently on projects. At the same time, I've deliberately expanded into backend development with technologies like Java, Python, PHP, Laravel and SQL. I'm not going to claim that I know everything. But I learn quickly, I'm persistent when things get difficult, and I genuinely enjoy developing software as well as web applications. I want to understand problems, contribute ideas and take responsibility rather than just complete tickets. I think I'd be someone who can contribute from day one with my existing experience while continuing to grow and become a stronger Fullstack Developer within the team.",
            'featured' => true,
            'sort_order' => 12,
        ]);
    }
}
