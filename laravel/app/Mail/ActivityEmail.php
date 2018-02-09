<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ActivityEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The order instance.
     *
     * @var Order
     */
    protected $order;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('groupe2@asr.lan')
          ->view('emails.activity2')
          ->with([
                  'file' => $this->order,
          ]);

        /*return $this->from('walpa@security.com')
                ->view('emails.template');
*/
              /*
              ATTACH FILE INTO EMAIL
              return $this->view('emails.orders.shipped')
                                 ->attach('/path/to/file');
              */
    }
}
