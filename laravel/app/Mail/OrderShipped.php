<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderShipped extends Mailable
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
        if ($this->order->type == "euro") {
            $type = "€";
        } elseif ($this->order->type == "bitcoin") {
            $type = "BC";
        } elseif ($this->order->type == "ether") {
            $type = "Ether";
        }
        return $this->from('groupe2@asr.lan')
          ->view('emails.template')
          ->with([
                  'lastName' => $this->order->lastName,
                  'firstName' => $this->order->firstName,
                  'amount' => $this->order->amount,
                  'type' => $type,
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
