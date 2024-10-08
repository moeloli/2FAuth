<?php

namespace Tests\Unit\Events;

use App\Events\GroupDeleting;
use App\Models\Group;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * GroupDeletingTest test class
 */
#[CoversClass(GroupDeleting::class)]
class GroupDeletingTest extends TestCase
{
    #[Test]
    public function test_event_constructor()
    {
        $group = Group::factory()->make();
        $event = new GroupDeleting($group);

        $this->assertSame($group, $event->group);
    }
}
