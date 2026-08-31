<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            ['name' => 'HTML5', 'category' => 'Frontend', 'sort_order' => 1],
            ['name' => 'CSS3', 'category' => 'Frontend', 'sort_order' => 2],
            ['name' => 'SCSS', 'category' => 'Frontend', 'sort_order' => 3],
            ['name' => 'JavaScript (ES6+)', 'category' => 'Frontend', 'sort_order' => 4],
            ['name' => 'React', 'category' => 'Frontend', 'sort_order' => 5],
            ['name' => 'PHP', 'category' => 'Backend', 'sort_order' => 6],
            ['name' => 'Laravel', 'category' => 'Backend', 'sort_order' => 7],
            ['name' => 'MySQL', 'category' => 'Database', 'sort_order' => 8],
            ['name' => 'Git / GitHub', 'category' => 'Tools', 'sort_order' => 9],
            ['name' => 'Webflow', 'category' => 'No-Code', 'sort_order' => 10],
            ['name' => 'Bubble.io', 'category' => 'No-Code', 'sort_order' => 11],
            ['name' => 'WordPress', 'category' => 'No-Code', 'sort_order' => 12],
            ['name' => 'Figma', 'category' => 'Design', 'sort_order' => 13],
            ['name' => 'Canva', 'category' => 'Design', 'sort_order' => 14],
            ['name' => 'Make', 'category' => 'Automation', 'sort_order' => 15],
            ['name' => 'REST API', 'category' => 'API', 'sort_order' => 16],
            ['name' => 'GraphQL', 'category' => 'API', 'sort_order' => 17],
            ['name' => 'jQuery', 'category' => 'Frontend', 'sort_order' => 18],
            ['name' => 'Bootstrap', 'category' => 'Frontend', 'sort_order' => 19],
            ['name' => 'Tailwind', 'category' => 'Frontend', 'sort_order' => 20],
            ['name' => 'Java', 'category' => 'Backend', 'sort_order' => 21],
            ['name' => 'Python', 'category' => 'Backend', 'sort_order' => 22],
            ['name' => 'Node.js', 'category' => 'Backend', 'sort_order' => 23],
            ['name' => 'Express.js', 'category' => 'Backend', 'sort_order' => 24],
            ['name' => 'composer', 'category' => 'Backend', 'sort_order' => 25],
            ['name' => 'npm', 'category' => 'Backend', 'sort_order' => 26],
            ['name' => 'MongoDB', 'category' => 'Database', 'sort_order' => 27],
            ['name' => 'Visual Studio Code', 'category' => 'Tools', 'sort_order' => 28],
            ['name' => 'IntelliJ', 'category' => 'Tools', 'sort_order' => 29],
            ['name' => 'Cursor', 'category' => 'Tools', 'sort_order' => 30],
            ['name' => 'ClickUp', 'category' => 'Collaboration', 'sort_order' => 31],
            ['name' => 'Monday', 'category' => 'Collaboration', 'sort_order' => 32],
            ['name' => 'Jira', 'category' => 'Collaboration', 'sort_order' => 33],
            ['name' => 'Slack', 'category' => 'Collaboration', 'sort_order' => 34],
            ['name' => 'Copilot', 'category' => 'AI', 'sort_order' => 35],
            ['name' => 'Claude', 'category' => 'AI', 'sort_order' => 36],
            ['name' => 'ChatGPT', 'category' => 'AI', 'sort_order' => 37],
            ['name' => 'Shopify', 'category' => 'E-Commerce', 'sort_order' => 38],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}