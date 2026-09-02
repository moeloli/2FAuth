<?php

namespace App\Listeners;

use Illuminate\Notifications\Events\NotificationFailed;
use Illuminate\Notifications\Events\NotificationSent;
use Illuminate\Support\Facades\Log;

class LogNotificationListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @return void
     */
    public function handle(mixed $event)
    {
        // $event->channel
        // $event->notifiable
        // $event->notification
        // $event->response

        if ($event instanceof NotificationSent)
        {
            Log::info(sprintf('Notification of type %s sent via channel %s to user ID #%s', get_class($event->notification), $event->channel, $event->notifiable->id));
        }
        else if ($event instanceof NotificationFailed)
        {
            Log::notice(sprintf('Notification sending to user ID #%s via channel %s failed (%s)', $event->notifiable->id, $event->channel, get_class($event->notification)));
        }
    }
}
